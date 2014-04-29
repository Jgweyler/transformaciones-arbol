/* description: Parses end executes mathematical expressions. */

%{
var symbol_table = {};

%}

%token ID COMPARISON NUMBER
%token CALL BEGIN END IF THEN ELSE WHILE DO ODD EOF
/* operator associations and precedence */

%right THEN ELSE
%right '='
%left '+' '-' 
%left '*' '/'
%left UMINUS


%start PROG

%% /* language grammar */

PROG
    : BLOCK "."
        { 
          $$ = $1; 
          return [$$];
        }
    ;

BLOCK
    : CONST VAR PROCEDURE STATEMENT{ $$ = "Block";}
    ;

CONST
    :/* empty */
    |"const" ID "=" NUMBER ANOTHERIDCONST ";"
        {
            $$ =[{
                type: "constant",
                right: $4,
                left: $2
            }];
            if($5) $$.concat($5);
        }
    ;

VAR 
    :/*empty*/
    |"var" ID ANOTHERIDVAR ";"
        {
            $$ =[{
                type: "var",
                right: $2
            }];
            if($3) $$.concat($3);
        }
    ;

PROCEDURE 
    :/*empty*/
    | "procedure" ID PARAMETERS ";" BLOCK ";" PROCEDURE
        {
            if($3){
                $$ = [{
                    type: "procedure",
                    id: $2,
                    parameters: $3,
                    block: $5
                }];
            }
            else{
                $$ = [{
                    type: "procedure",
                    id: $2,
                    block: $5
                }];
            }
            if($7) $$.concat($7);
        }
    ;

STATEMENT
    : ID "=" expression
        {
            $$ = {
                type: "=",
                right: $2,
                left: $1
            };
        }
    | CALL ID PARAMETERS
        {
            $$ = [{ 
                type: "call",
                right: $2
            }];
            if($3) $$.concat($3);
        }
    | BEGIN STATEMENT ANOTHERSTATEMENT END
        {
            $$ = [{
                type: "begin",
                left: $2
            }];
            if($3) $$.concat($3);
        }
    | IF CONDITION THEN STATEMENT ELSE STATEMENT
        {
            $$ = {
                type: "ifelse",
                condition: $2,
                statement_true: $4,
                statement_false: $6
            };
        }
    | IF CONDITION THEN STATEMENT
        {
            $$ = {
                type: "ifthen",
                condition: $2,
                statement: $4
            };
        }
    | WHILE CONDITION DO STATEMENT
        {
            $$ = {
                type: "while",
                condition: $2,
                statement: $4
            };
        }
    ;

ANOTHERSTATEMENT
    : /*empty*/
    | ";" STATEMENT
        {
            $$ = [{
                type: "statement",
                right: $2
            }];
            if($2) $$.concat($2);
        }
    ;

CONDITION
    :"odd" expression
        {
            $$ = {
                exp: $2
            };
        }
    |expression COMPARISON expression
        {
            $$ = {
                type: $2,
                right: $3,
                left: $1
            };
        }
    ;

PARAMETERS
    : /*empty*/
    | "(" ID ANOTHERPARAMETER ")"
        {
            $$ = [{
                type: "parameter",
                right: $2
            }];
            if($3) $$.concat($3);
        }
    ;

ANOTHERPARAMETER
    : /*empty*/
    | "," ID ANOTHERPARAMETER
        {
            $$ = [{
                type: "parameter",
                right: $2
            }];
            if($3) $$.concat($3);
        }
    ;

ANOTHERIDCONST
    : /* empty */
    |"," ID "=" NUMBER ANOTHERIDCONST
        {$$ =[{
                type: 'constant',
                right: $4,
                left: $2
             }];
            if ($5) $$.concat($5);
        }
    ;

ANOTHERIDVAR
    : /*empty*/
    |"," ID ANOTHERIDVAR ";"
        {$$ =[{
                type: 'var',
                right: $2
             }];
             if($3)$$.concat($3);
        }
    ;

expression
    : ID '=' expression
        { symbol_table[$1] = $$ = $3; }
    | expression '+' expression
        {$$ = {
                type: "+",
                left: $1,
                right: $3
              };
        }
    | expression '-' expression
        {$$ = {
                type: "-",
                left: $1,
                right: $3
              };
        }
    | expression '*' expression
        {$$ = {
                type: "*",
                left: "$1",
                right: "$3"
              };
        }
    | expression '/' expression
        {
          if ($3 == 0) throw new Error("Division by zero, error!");
          $$ ={
                type: "/",
                left: $1,
                right: $3
              };
          }
    | '-' e %prec UMINUS
        {$$ = {
                type: "-",
                right: $2
               };
        }
    | '+' e %prec UMINUS
        {$$ = {
                type: "+",
                right: $2
               };
        }
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | ID 
        { $$ = {type: "ID",
                value: yytext
                }; 
        }
    ;
