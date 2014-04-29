/* lexical grammar */
%{
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

%}
%%

\s+|\#.*                         /* skip whitespace and comments */
\b\d+("."\d*)?([eE][-+]?\d+)?\b  return 'NUMBER'
\b[A-Za-z_]\w*\b                 return idORrw(yytext)
[<>=!][=]|[<>#]	                 return 'COMPARISON'
[-*/+^!%=();]                    return yytext;
<<EOF>>                          return 'EOF'
.                                return 'INVALID'
