/* description: Parses logo into AST */

/* lexical grammar */
%lex

%%
\n+											{return 'NEWLINE'};
[ \r\t]									;  
[a-zA-Z_][a-zA-Z0-9_]*  {return 'IDENTIFIER'};
[0-9]+\.[0-9]*          {return 'DOUBLE'};
[0-9]+                  {return 'INTEGER'};


/lex

/*<<EOF>>               	{return 'EOF'};*/
/* operator associations and precedence */

/*%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS*/

%start root   
  
%% /* language grammar */

root
		: body 							{ $$ = ['root', $1]; return $$ }
    ;

body 
		: line							{ $$ = [$1] }
		| body term line 		{ $1.push($3) }
		| body term
    ;

line 
		: stmts
		;

stmts
		: stmt 	 				    { $$ = ['stmt', $1] }
 		| stmts stmt 				{ $1.push($2) }
		;

stmt
		: expr 				      { $$ = ['expr', $1] }
    ;

expr
		: IDENTIFIER
		| DOUBLE
		| INTEGER
		;

term
		: NEWLINE
		;