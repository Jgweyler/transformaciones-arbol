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


%start prog

%% /* language grammar */

prog
    : block '.' EOF
        { 
          $$ = {type: 'program',
		        block: $1 
               };
          return $$;
        }
    ;

block
    : constants variables procedures statement
	{ 
	    $$ = {type: 'program', 
		     procedures: $3, 
		     statement: $4 
            };
	}
    ;

constants
    :/* empty */
    |CONST ID '=' NUMBER anotheridconst ';'
        {
            $$ =[{
                type: 'constant',
                right: $4,
                left: $2
            }];
            if($5) $$.concat($5);
        }
    ;

anotheridconst
    : /* empty */
    |',' ID '=' NUMBER anotheridconst
        {$$ =[{
                type: 'constant',
                right: $4,
                left: $2
             }];
            if ($5) $$.concat($5);
        }
    ;

variables 
    :/*empty*/
    |VAR ID anotheridvar ';'
        {
            $$ =[{
                type: 'var',
                right: $2
            }];
            if($3) $$.concat($3);
        }
    ;

anotheridvar
    : /*empty*/
    |',' ID anotheridvar ';'
        {
	         $$ =[{
                type: 'var',
                right: $2
             }];
             if($3)$$.concat($3);
        }
    ;

procedures
    :
    |PROCEDURE ID parameters ';' block ';' procedures
        {
            $$ = [{ type: 'procedure', 
	    	    id: $2,
	    	    arguments: $3,
	   	        block: $5
            }];
	    if($7) $$ = $$.concat($7);
        }
    ;


statement
    : ID '=' expression
        {
            $$ = {
                type: '=',
                right: $3,
                left: {type: 'ID', value: $1}
            };
        }
    | CALL ID parameters
        {
            $$ = { 
                type: 'call',
                id: $2,
                arguments: $3
            };
        }
    | BEGIN statement anotherstatement END
        {
            var stat = [$2];
            if($3) stat.concat($3);
            $$ = {
                type: 'begin',
                statements: stat
            };
        }
    | IF condition THEN statement
        {
            $$ = {
                type: 'ifthen',
                condition: $2,
                statement: $4
            };
        }
    | IF condition THEN statement ELSE statement
        {
            $$ = {
                type: 'ifelse',
                condition: $2,
                statement_true: $4,
                statement_false: $6
            };
        }
    | WHILE condition DO statement
        {
            $$ = {
                type: 'while',
                condition: $2,
                statement: $4
            };
        }
    ;

anotherstatement
    : /*empty*/
    | ';' statement anotherstatement
        {
            $$ = [$2];
            if($3) $$ = $$.concat($3);
        }
    ;

parameters
    : /*empty*/
    | '(' ID anotherparameter ')'
        {
            $$ = [{
                type: 'parameter',
                right: $2
            }];
            if($3) $$.concat($3);
        }
    ;

anotherparameter
    : /*empty*/
    | ',' ID anotherparameter
        {
            $$ = [{
                type: 'parameter',
                right: $2
            }];
            if($3) $$.concat($3);
        }
    ;

CONDITION
    :ODD expression
        {
            $$ = {
                type: 'ID',
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
                type: '+',
                left: $1,
                right: $3
              };
        }
    | expression '-' expression
        {$$ = {
                type: '-',
                left: $1,
                right: $3
              };
        }
    | expression '*' expression
        {$$ = {
                type: '*',
                left: $1,
                right: $3
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
                type: '-',
                right: $2
               };
        }
    | '+' e %prec UMINUS
        {$$ = {
                type: '+',
                right: $2
               };
        }
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = {type: 'NUM', value: Number(yytext)};}
    | ID 
        { $$ = {type: 'ID',
                value: $1
                }; 
        }
    ;
