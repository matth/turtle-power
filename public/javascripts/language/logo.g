/* description: Parses logo into AST */

/* lexical grammar */
%lex

%%
\n+											{return 'NEWLINE'};
[ \r\t]									;  
"to"										{return 'BLOCK_START'}
"end"										{return 'BLOCK_END'}
[a-zA-Z_][a-zA-Z0-9_]*  {return 'IDENTIFIER'};
[0-9]+'.'[0-9]*         {return 'DOUBLE'};
[0-9]+                  {return 'INTEGER'};

/lex

%start root   
  
%% /* language grammar */

root
		: body   			 			{ $$ = ['root', $1]; return $$ }
    ;                                                   

body                
		: block							{ $$ = [$1] }  
		| line							{ $$ = [$1] }  
		| body line     		{ $1.push($2) }
    ;      
      
block
		: BLOCK_START line body BLOCK_END term { $$ = [$1, $2, $3] }	
    ;

line 
		: term         		  { $$ = [] }
		| stmts term
		;

stmts
		: stmt 	 				    { $$ = ['stmt', $1] }
 		| stmts stmt 			  { $1.push($2) }
		;
                        
stmt
		: expr 				      { $$ = new AST.T_EXPRESSION($1) }
    ;

expr
		: IDENTIFIER			  { $$ = new AST.T_IDENTIFIER($1) } 
		| DOUBLE            { $$ = new AST.T_FLOAT($1) } 
		| INTEGER           { $$ = new AST.T_INTEGER($1) } 
		;

term
		: NEWLINE
		;