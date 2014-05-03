/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pl0 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"prog":3,"block":4,".":5,"EOF":6,"constants":7,"variables":8,"procedures":9,"statement":10,"CONST":11,"ID":12,"=":13,"NUMBER":14,"anotheridconst":15,";":16,",":17,"VAR":18,"anotheridvar":19,"PROCEDURE":20,"parameters":21,"expression":22,"CALL":23,"BEGIN":24,"anotherstatement":25,"END":26,"IF":27,"condition":28,"THEN":29,"ELSE":30,"WHILE":31,"DO":32,"(":33,"anotherparameter":34,")":35,"ODD":36,"COMPARISON":37,"+":38,"-":39,"*":40,"/":41,"$accept":0,"$end":1},
terminals_: {2:"error",5:".",6:"EOF",11:"CONST",12:"ID",13:"=",14:"NUMBER",16:";",17:",",18:"VAR",20:"PROCEDURE",23:"CALL",24:"BEGIN",26:"END",27:"IF",29:"THEN",30:"ELSE",31:"WHILE",32:"DO",33:"(",35:")",36:"ODD",37:"COMPARISON",38:"+",39:"-",40:"*",41:"/"},
productions_: [0,[3,3],[4,4],[7,0],[7,6],[15,0],[15,5],[8,0],[8,4],[19,0],[19,3],[9,0],[9,7],[10,3],[10,3],[10,4],[10,4],[10,6],[10,4],[25,0],[25,3],[21,0],[21,4],[34,0],[34,3],[28,2],[28,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,2],[22,3],[22,1],[22,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: 
          this.$ = {type: 'program',
		        block: $$[$0-2] 
               };
          return this.$;
        
break;
case 2: 
	    this.$ = {type: 'block', 
		     constants: $$[$0-3],
             vars: $$[$0-2],
             procs: $$[$0-1], 
		     sts: $$[$0] 
            };
	
break;
case 4:
            symbol_table.symbols[$$[$0-4]] = {type: 'const', value: $$[$0-2]};
            //this.$ =[{
                //type: 'constant',
                //value: $$[$0-2],
                //id: $$[$0-4],
                //declared_in: symbol_table.name
            //}];
            //if($$[$0-1]) this.$.concat($$[$0-1]);
        
break;
case 6:
            symbol_table.symbols[$$[$0-3]] = {type: 'const', value: $$[$0-1]};
            //this.$ =[{
               // type: 'constant',
               //value: $$[$0-1],
               //id: $$[$0-3]
               //declared_in: symbol_table.name
            //}];
            //if ($$[$0]) this.$.concat($$[$0]);
        
break;
case 8:
            symbol_table.symbols[$$[$0-2]] = {type: 'var'};
            //this.$ =[{
                //type: 'var',
                //id: $$[$0-2]
            //}];
            //if($$[$0-1]) this.$.concat($$[$0-1]);
        
break;
case 10:
            symbol_table.symbols[$$[$0-1]] = {type: 'var'};
	         //this.$ =[{
                //type: 'var',
                //id: $$[$0-1]
             //}];
             //if($$[$0])this.$.concat($$[$0]);
        
break;
case 12:
            this.$ = [{ type: 'procedure', 
	    	    id: $$[$0-5],
	    	    arguments: $$[$0-4],
                N_args: $$[$0-4].length,
	   	        block: $$[$0-2]
            }];
	    if($$[$0]) this.$ = this.$.concat($$[$0]);
        
break;
case 13:
            buscarDeclaracion($$[$0-2]);
            IgualarConst($$[$0-2]);
            IgualarProc($$[$0-2]);

            this.$ = {
                type: '=',
                right: $$[$0],
                left: {type: 'ID', value: $$[$0-2]}
            };
        
break;
case 14:
            this.$ = { 
                type: 'call',
                id: $$[$0-1],
                arguments: $$[$0]
            };
        
break;
case 15:
            var stat = [$$[$0-2]];
            if($$[$0-1]) stat.concat($$[$0-1]);
            this.$ = {
                type: 'begin',
                statements: stat
            };
        
break;
case 16:
            this.$ = {
                type: 'ifthen',
                condition: $$[$0-2],
                statement: $$[$0]
            };
        
break;
case 17:
            this.$ = {
                type: 'ifelse',
                condition: $$[$0-4],
                statement_true: $$[$0-2],
                statement_false: $$[$0]
            };
        
break;
case 18:
            this.$ = {
                type: 'while',
                condition: $$[$0-2],
                statement: $$[$0]
            };
        
break;
case 20:
            this.$ = [$$[$0-1]];
            if($$[$0]) this.$ = this.$.concat($$[$0]);
        
break;
case 22:
            this.$ = [{
                type: 'parameter',
                right: $$[$0-2]
            }];
            if($$[$0-1]) this.$.concat($$[$0-1]);
        
break;
case 24:
            this.$ = [{
                type: 'parameter',
                right: $$[$0-1]
            }];
            if($$[$0]) this.$.concat($$[$0]);
        
break;
case 25:
            this.$ = {
                type: 'ID',
                exp: $$[$0]
            };
        
break;
case 26:
            this.$ = {
                type: $$[$0-1],
                right: $$[$0],
                left: $$[$0-2]
            };
        
break;
case 27:
            buscarDeclaracion($$[$0-2]);
            IgualarConst($$[$0-2]);
            IgualarProc($$[$0-2]);
            this.$ = { type: '=',
                 left: { type: 'ID', value: $$[$0-2] },
                 right: $$[$0] 
            }; 
         
break;
case 28:this.$ = {
                type: '+',
                left: $$[$0-2],
                right: $$[$0]
              };
        
break;
case 29:this.$ = {
                type: '-',
                left: $$[$0-2],
                right: $$[$0]
              };
        
break;
case 30:this.$ = {
                type: '*',
                left: $$[$0-2],
                right: $$[$0]
              };
        
break;
case 31:
          this.$ ={
                type: "/",
                left: $$[$0-2],
                right: $$[$0]
              };
          
break;
case 32:this.$ = {
                type: '-',
                right: $$[$0]
               };
        
break;
case 33:this.$ = {
                type: '+',
                right: $$[$0]
               };
        
break;
case 34:this.$ = $$[$0-1];
break;
case 35:this.$ = {type: 'NUM', value: Number(yytext)};
break;
case 36: this.$ = {type: 'ID',
                value: $$[$0]
                }; 
        
break;
}
},
table: [{3:1,4:2,7:3,11:[1,4],12:[2,3],18:[2,3],20:[2,3],23:[2,3],24:[2,3],27:[2,3],31:[2,3]},{1:[3]},{5:[1,5]},{8:6,12:[2,7],18:[1,7],20:[2,7],23:[2,7],24:[2,7],27:[2,7],31:[2,7]},{12:[1,8]},{6:[1,9]},{9:10,12:[2,11],20:[1,11],23:[2,11],24:[2,11],27:[2,11],31:[2,11]},{12:[1,12]},{13:[1,13]},{1:[2,1]},{10:14,12:[1,15],23:[1,16],24:[1,17],27:[1,18],31:[1,19]},{12:[1,20]},{16:[2,9],17:[1,22],19:21},{14:[1,23]},{5:[2,2],16:[2,2]},{13:[1,24]},{12:[1,25]},{10:26,12:[1,15],23:[1,16],24:[1,17],27:[1,18],31:[1,19]},{12:[1,30],14:[1,34],22:29,28:27,33:[1,33],36:[1,28],38:[1,32],39:[1,31]},{12:[1,30],14:[1,34],22:29,28:35,33:[1,33],36:[1,28],38:[1,32],39:[1,31]},{16:[2,21],21:36,33:[1,37]},{16:[1,38]},{12:[1,39]},{15:40,16:[2,5],17:[1,41]},{12:[1,30],14:[1,34],22:42,33:[1,33],38:[1,32],39:[1,31]},{5:[2,21],16:[2,21],21:43,26:[2,21],30:[2,21],33:[1,37]},{16:[1,45],25:44,26:[2,19]},{29:[1,46]},{12:[1,30],14:[1,34],22:47,33:[1,33],38:[1,32],39:[1,31]},{37:[1,48],38:[1,49],39:[1,50],40:[1,51],41:[1,52]},{5:[2,36],13:[1,53],16:[2,36],26:[2,36],29:[2,36],30:[2,36],32:[2,36],35:[2,36],37:[2,36],38:[2,36],39:[2,36],40:[2,36],41:[2,36]},{12:[1,30],14:[1,34],22:54,33:[1,33],38:[1,32],39:[1,31]},{12:[1,30],14:[1,34],22:55,33:[1,33],38:[1,32],39:[1,31]},{12:[1,30],14:[1,34],22:56,33:[1,33],38:[1,32],39:[1,31]},{5:[2,35],16:[2,35],26:[2,35],29:[2,35],30:[2,35],32:[2,35],35:[2,35],37:[2,35],38:[2,35],39:[2,35],40:[2,35],41:[2,35]},{32:[1,57]},{16:[1,58]},{12:[1,59]},{12:[2,8],20:[2,8],23:[2,8],24:[2,8],27:[2,8],31:[2,8]},{16:[2,9],17:[1,22],19:60},{16:[1,61]},{12:[1,62]},{5:[2,13],16:[2,13],26:[2,13],30:[2,13],38:[1,49],39:[1,50],40:[1,51],41:[1,52]},{5:[2,14],16:[2,14],26:[2,14],30:[2,14]},{26:[1,63]},{10:64,12:[1,15],23:[1,16],24:[1,17],27:[1,18],31:[1,19]},{10:65,12:[1,15],23:[1,16],24:[1,17],27:[1,18],31:[1,19]},{29:[2,25],32:[2,25],38:[1,49],39:[1,50],40:[1,51],41:[1,52]},{12:[1,30],14:[1,34],22:66,33:[1,33],38:[1,32],39:[1,31]},{12:[1,30],14:[1,34],22:67,33:[1,33],38:[1,32],39:[1,31]},{12:[1,30],14:[1,34],22:68,33:[1,33],38:[1,32],39:[1,31]},{12:[1,30],14:[1,34],22:69,33:[1,33],38:[1,32],39:[1,31]},{12:[1,30],14:[1,34],22:70,33:[1,33],38:[1,32],39:[1,31]},{12:[1,30],14:[1,34],22:71,33:[1,33],38:[1,32],39:[1,31]},{5:[2,32],16:[2,32],26:[2,32],29:[2,32],30:[2,32],32:[2,32],35:[2,32],37:[2,32],38:[2,32],39:[2,32],40:[2,32],41:[2,32]},{5:[2,33],16:[2,33],26:[2,33],29:[2,33],30:[2,33],32:[2,33],35:[2,33],37:[2,33],38:[2,33],39:[2,33],40:[2,33],41:[2,33]},{35:[1,72],38:[1,49],39:[1,50],40:[1,51],41:[1,52]},{10:73,12:[1,15],23:[1,16],24:[1,17],27:[1,18],31:[1,19]},{4:74,7:3,11:[1,4],12:[2,3],18:[2,3],20:[2,3],23:[2,3],24:[2,3],27:[2,3],31:[2,3]},{17:[1,76],34:75,35:[2,23]},{16:[2,10]},{12:[2,4],18:[2,4],20:[2,4],23:[2,4],24:[2,4],27:[2,4],31:[2,4]},{13:[1,77]},{5:[2,15],16:[2,15],26:[2,15],30:[2,15]},{16:[1,45],25:78,26:[2,19]},{5:[2,16],16:[2,16],26:[2,16],30:[1,79]},{29:[2,26],32:[2,26],38:[1,49],39:[1,50],40:[1,51],41:[1,52]},{5:[2,28],16:[2,28],26:[2,28],29:[2,28],30:[2,28],32:[2,28],35:[2,28],37:[2,28],38:[2,28],39:[2,28],40:[1,51],41:[1,52]},{5:[2,29],16:[2,29],26:[2,29],29:[2,29],30:[2,29],32:[2,29],35:[2,29],37:[2,29],38:[2,29],39:[2,29],40:[1,51],41:[1,52]},{5:[2,30],16:[2,30],26:[2,30],29:[2,30],30:[2,30],32:[2,30],35:[2,30],37:[2,30],38:[2,30],39:[2,30],40:[2,30],41:[2,30]},{5:[2,31],16:[2,31],26:[2,31],29:[2,31],30:[2,31],32:[2,31],35:[2,31],37:[2,31],38:[2,31],39:[2,31],40:[2,31],41:[2,31]},{5:[2,27],16:[2,27],26:[2,27],29:[2,27],30:[2,27],32:[2,27],35:[2,27],37:[2,27],38:[1,49],39:[1,50],40:[1,51],41:[1,52]},{5:[2,34],16:[2,34],26:[2,34],29:[2,34],30:[2,34],32:[2,34],35:[2,34],37:[2,34],38:[2,34],39:[2,34],40:[2,34],41:[2,34]},{5:[2,18],16:[2,18],26:[2,18],30:[2,18]},{16:[1,80]},{35:[1,81]},{12:[1,82]},{14:[1,83]},{26:[2,20]},{10:84,12:[1,15],23:[1,16],24:[1,17],27:[1,18],31:[1,19]},{9:85,12:[2,11],20:[1,11],23:[2,11],24:[2,11],27:[2,11],31:[2,11]},{5:[2,22],16:[2,22],26:[2,22],30:[2,22]},{17:[1,76],34:86,35:[2,23]},{15:87,16:[2,5],17:[1,41]},{5:[2,17],16:[2,17],26:[2,17],30:[2,17]},{12:[2,12],23:[2,12],24:[2,12],27:[2,12],31:[2,12]},{35:[2,24]},{16:[2,6]}],
defaultActions: {9:[2,1],60:[2,10],78:[2,20],86:[2,24],87:[2,6]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

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
      if(aux && aux['type'] == 'procedure')
    throw "Error! Se ha intentado igualar el procedimiento '" + x + "' en el procedimiento: " + symbol_tables[a].name;
      a--;
    } while (a >= 0 && !aux);
    
    return;
  }

/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var reserved_words ={ VAR: 'VAR',
					  CONST: 'CONST',
					  PROCEDURE: 'PROCEDURE',
					  BEGIN: 'BEGIN',
					  END: 'END',
					  ODD: 'ODD',
					  CALL: 'CALL',
					  IF: 'IF',
					  THEN: 'THEN',
					  ELSE: 'ELSE',
					  WHILE: 'WHILE',
					  DO: 'DO'}
					 

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and comments */
break;
case 1:return 14
break;
case 2:return idORrw(yy_.yytext)
break;
case 3:return 37
break;
case 4:return yy_.yytext;
break;
case 5:return 6
break;
case 6:return 'INVALID'
break;
}
},
rules: [/^(?:\s+|#.*)/,/^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/,/^(?:\b[A-Za-z_]\w*\b)/,/^(?:[<>=!][=]|[<>#])/,/^(?:[-*/+()=;,.])/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pl0;
exports.Parser = pl0.Parser;
exports.parse = function () { return pl0.parse.apply(pl0, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}