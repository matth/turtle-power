/* description: Parses logo into AST */

/* lexical grammar */
%lex

%%
\s+											{ /* Ignore whitespace */ }
[a-zA-Z_][a-zA-Z0-9_]*  { return 'WORD' }
[0-9]+'.'[0-9]*         { return 'FLOAT' }
[0-9]+                  { return 'INTEGER' }
"+"                     { return '+' }  
"-"                     { return '-' }        
"*"                     { return '*' }
"/"                     { return '/' }

/lex

/* operator associations and precedence */

%left '+' '-' 
%left '*' '/' 

%start root   
  
%% /* language grammar */

root
		: expr    			 			{ $$ = $1; return $$ }
    ;

expr                                              
		: expr '+' expr				{ $$ = [new Tokens.WORD('sum')].concat($1,$3) }
		| expr '-' expr    		{ $$ = [new Tokens.WORD('difference')].concat($1,$3) }
		| expr '/' expr    		{ $$ = [new Tokens.WORD('quotient')].concat($1,$3) }
		| expr '*' expr    		{ $$ = [new Tokens.WORD('product')].concat($1,$3) }
		| tokens				   		{ $$ = $1 }
		;                                  
		
tokens
		: token			  				{ $$ = [$1] }
		| tokens token				{ $1.push($2) }
		;

token
		: WORD						  	{ $$ = new Tokens.WORD($1)    } 
		| FLOAT	    			  	{ $$ = new Tokens.FLOAT($1)   } 
		| INTEGER					  	{ $$ = new Tokens.INTEGER($1) } 
		;
