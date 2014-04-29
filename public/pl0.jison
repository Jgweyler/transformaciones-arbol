/* description: Parses end executes mathematical expressions. */

%{
var symbol_table = {};

%}

%token ID COMPARISON NUMBER
%token CALL BEGIN END IF THEN ELSE WHILE DO ODD EOF
/* operator associations and precedence */

%right THEN ELSE
%left '==' '<=' '>=' '<' '>'
%right '='
%left '+' '-' 
%left '*' '/'
%left UMINUS


%start PROG

%% /* language grammar */

PROG
    : BLOCK "." EOF
        { 
          $$ = {type: 'program',
		        block: $1 
               };
          return $$;
        }
    ;

BLOCK
    : CONST VAR PROCEDURE STATEMENT
	{ 
	    $$ = {type: 'program', 
		     procedures: $3, 
		     statement: $4 
            };
	}
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

ANOTHERIDVAR
    : /*empty*/
    |"," ID ANOTHERIDVAR ";"
        {
	         $$ =[{
                type: 'var',
                right: $2
             }];
             if($3)$$.concat($3);
        }
    ;

PROCEDURE
    :
    |"procedure" ID PARAMETERS ';' BLOCK ';' PROCEDURE
        {
            $$ = [{ type: 'procedure', 
	    	    id: $2,
	    	    arguments: $3,
	   	        block: $5
            }];
	    if($7) $$ = $$.concat($7);
        }
    ;


STATEMENT
    : ID "=" expression
        {
            $$ = {
                type: "=",
                right: $3,
                left: {type: 'ID', value: $1}
            };
        }
    | CALL ID PARAMETERS
        {
            $$ = { 
                type: "call",
                id: $2,
                arguments: $3
            };
        }
    | BEGIN STATEMENT ANOTHERSTATEMENT END
        {
            var stat = [$2];
            if($3) stat.concat($3);
            $$ = {
                type: "begin",
                statements: stat
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
    | IF CONDITION THEN STATEMENT ELSE STATEMENT
        {
            $$ = {
                type: "ifelse",
                condition: $2,
                statement_true: $4,
                statement_false: $6
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
    | ';' STATEMENT ANOTHERSTATEMENT
        {
            $$ = [$2];
            if($3) $$ = $$.concat($3);
        }
    ;

PARAMETERS
    : /*empty*/
    | '(' ID ANOTHERPARAMETER ')'
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
        { $$ = {type: 'ID',
                value: $1
                }; 
        }
    ;
