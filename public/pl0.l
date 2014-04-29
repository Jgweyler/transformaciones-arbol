/* lexical grammar */
%{
var reserved_words ={ PROCEDURE: 'PROCEDURE',
					  BEGIN: 'BEGIN',
					  END: 'END',
					  CALL: 'CALL',
					  WHILE: 'WHILE',
					  DO: 'DO',
					  ODD: 'ODD',
					  VAR: 'VAR',
					  CONST: 'CONST',
					  IF: 'IF',
					  THEN: 'THEN',
					  ELSE: 'ELSE'}

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}

%}
%%

\s+|\#.*                         /* skip whitespace and comments */
\b\d+("."\d*)?([eE][-+]?\d+)?\b  return 'NUMBER'
\b[A-Za-z_]\w*\b                 return idORrw(yytext)
([<>!=]=)?|[<>]		         return 'COMPARISON'
[-*/+^!%=();]                    return yytext;
<<EOF>>                          return 'EOF'
.                                return 'INVALID'
