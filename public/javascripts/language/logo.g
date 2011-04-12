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
"["											{ return '[' }
"]"											{ return ']' }

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
		: expr '+' expr				{ var x = $1.pop(); $$ =  $1.concat(new Tokens.WORD('sum'), x, $3) } 
		| expr '-' expr    		{ var x = $1.pop(); $$ =  $1.concat(new Tokens.WORD('difference'), x, $3) } 
		| expr '/' expr    		{ var x = $1.pop(); $$ =  $1.concat(new Tokens.WORD('quotient'), x, $3) } 
		| expr '*' expr    		{ var x = $1.pop(); $$ =  $1.concat(new Tokens.WORD('product'), x, $3) } 
		| tokens				   		{ $$ = $1 }
		;                                  
		
tokens
		: token			  				{ $$ = [$1] }  
		| '[' expr ']'        { $$ = [new Tokens.LIST($2)] }				
		| tokens token				{ $1.push($2) }
		;

token
		: WORD						  	{ $$ = new Tokens.WORD($1)    } 
		| FLOAT	    			  	{ $$ = new Tokens.FLOAT($1)   } 
		| INTEGER					  	{ $$ = new Tokens.INTEGER($1) } 
		;
