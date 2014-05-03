/* description: Parses end executes mathematical expressions. */

%{
var ambito = 0;
var symbol_tables = [{ name: 'Global', father: null, symbols: {} }];
var symbol_table = symbol_tables[ambito];

function irHaciaArriba(){
    ambito --;
    symbol_table = symbol_tables [ambito];
}

function anyadirAmbito(id){
    ambito ++;
    symbol_tables.push({ name: id, father: symbol_table.name, symbols: {} });
    symbol_table = symbol_tables[ambito];
}

function procedureDeclarado(id){
    var aux;
    var a = ambito;
    do{
        aux = symbol_tables[a].symbols[id]
        if(aux)
            return;
        a --;
    }while (a >= 0 && !aux);

    throw "Error, no se ha declarado previamente el procedimiento '" + id + "' .";
}

function buscarDeclaracion(id){
    var aux;
    var a = ambito;
    do{
        aux = symbol_tables[a].symbols[id];
        if(aux)
            return;
        a --;
    }while(a >=0 && !aux);

    throw "Error! No se ha declarado la variable o constante '" + id + "' .";
}

function comprobarArgs(x, y){
    var aux;
    var a = ambito;
    do{
        aux = symbol_tables[a].symbols[x];
        if(aux && aux['type'] == 'PROCEDURE' && symbol_tables[a].symbols[x]['N_args'] != y)
            throw "Error! Los argumentos del procedimiento '" + x + "' no son validos";
            a--;
    }while (a >= 0 && !aux);

    return;
}

function IgualarConst(x) {
    var aux;
    var a = ambito;
    do {
      aux = symbol_tables[a].symbols[x];
      if(aux && aux['type'] == 'const')
    throw "Error! Se ha intentado igualar la constante '" + x + "' en el procedimiento: " + symbol_tables[a].name;
      s--;
    } while (a >= 0 && !aux);
    
    return;
  }

  function IgualarProc(x) {
    var aux;
    var a = ambito;
    do {
      aux = symbol_tables[a].symbols[x];
      if(aux && aux['type'] == 'PROCEDURE')
    throw "Error! Se ha intentado igualar el procedimiento '" + x + "' en el procedimiento: " + symbol_tables[a].name;
      s--;
    } while (s >= 0 && !f);
    
    return;
  }

%}

%token NUMBER ID ODD EOF IF THEN ELSE WHILE DO CALL BEGIN
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
	    $$ = {type: 'block', 
		     constants: $1,
             vars: $2,
             procs: $3, 
		     sts: $4 
            };
	}
    ;

constants
    :/* empty */
    |CONST ID '=' NUMBER anotheridconst ';'
        {
            symbol_table.symbols[$2] = {type: 'const', value: $4};
            //$$ =[{
                //type: 'constant',
                //value: $4,
                //id: $2,
                //declared_in: symbol_table.name
            //}];
            //if($5) $$.concat($5);
        }
    ;

anotheridconst
    : /* empty */
    |',' ID '=' NUMBER anotheridconst
        {
            symbol_table.symbols[$2] = {type: 'const', value: $4};
            //$$ =[{
               // type: 'constant',
               //value: $4,
               //id: $2
               //declared_in: symbol_table.name
            //}];
            //if ($5) $$.concat($5);
        }
    ;

variables 
    :/*empty*/
    |VAR ID anotheridvar ';'
        {
            symbol_table.symbols[$2] = {type: 'var'};
            //$$ =[{
                //type: 'var',
                //id: $2
            //}];
            //if($3) $$.concat($3);
        }
    ;

anotheridvar
    : /*empty*/
    |',' ID anotheridvar 
        {
            symbol_table.symbols[$2] = {type: 'var'};
	         //$$ =[{
                //type: 'var',
                //id: $2
             //}];
             //if($3)$$.concat($3);
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
            buscarDeclaracion($1);
            IgualarConst($1);

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

condition
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
         {
            buscarDeclaracion($1);
            IgualarConst($1);
            $$ = { type: '=',
                 left: { type: 'ID', value: $1 },
                 right: $3 
            }; 
         }
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
          $$ ={
                type: "/",
                left: $1,
                right: $3
              };
          }
    | '-' expression %prec UMINUS
        {$$ = {
                type: '-',
                right: $2
               };
        }
    | '+' expression %prec UMINUS
        {$$ = {
                type: '+',
                right: $2
               };
        }
    | '(' expression ')'
        {$$ = $2;}
    | NUMBER
        {$$ = {type: 'NUM', value: Number(yytext)};}
    | ID 
        { $$ = {type: 'ID',
                value: $1
                }; 
        }
    ;
