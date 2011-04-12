/* Jison generated parser */
var logo = (function(){
var parser = {trace: 
function trace() {
}
,
yy: {},
symbols_: {"error":2,"root":3,"expr":4,"+":5,"-":6,"/":7,"*":8,"tokens":9,"token":10,"WORD":11,"FLOAT":12,"INTEGER":13,"[":14,"]":15,"$accept":0,"$end":1},
terminals_: {2:"error",5:"+",6:"-",7:"/",8:"*",11:"WORD",12:"FLOAT",13:"INTEGER",14:"[",15:"]"},
productions_: [0,[3,1],[4,3],[4,3],[4,3],[4,3],[4,1],[9,1],[9,2],[10,1],[10,1],[10,1],[10,3],[10,2]],
performAction: 
function anonymous(yytext, yyleng, yylineno, yy, yystate, $$) {
    var $0 = $$.length - 1;
    switch (yystate) {
      case 1:
        this.$ = $$[$0];
        return this.$;
        break;
      case 2:
        var x = $$[$0 - 2].pop();
        this.$ = $$[$0 - 2].concat(new Tokens.WORD("sum"), x, $$[$0]);
        break;
      case 3:
        var x = $$[$0 - 2].pop();
        this.$ = $$[$0 - 2].concat(new Tokens.WORD("difference"), x, $$[$0]);
        break;
      case 4:
        var x = $$[$0 - 2].pop();
        this.$ = $$[$0 - 2].concat(new Tokens.WORD("quotient"), x, $$[$0]);
        break;
      case 5:
        var x = $$[$0 - 2].pop();
        this.$ = $$[$0 - 2].concat(new Tokens.WORD("product"), x, $$[$0]);
        break;
      case 6:
        this.$ = $$[$0];
        break;
      case 7:
        this.$ = [$$[$0]];
        break;
      case 8:
        $$[$0 - 1].push($$[$0]);
        break;
      case 9:
        this.$ = new Tokens.WORD($$[$0]);
        break;
      case 10:
        this.$ = new Tokens.FLOAT($$[$0]);
        break;
      case 11:
        this.$ = new Tokens.INTEGER($$[$0]);
        break;
      case 12:
        this.$ = new Tokens.LIST($$[$0 - 1]);
        break;
      case 13:
        this.$ = new Tokens.LIST([]);
        break;
    }
}
,
table: [{3:1,4:2,9:3,10:4,11:[1,5],12:[1,6],13:[1,7],14:[1,8]},{1:[3]},{5:[1,9],6:[1,10],7:[1,11],8:[1,12],1:[2,1]},{10:13,11:[1,5],12:[1,6],13:[1,7],14:[1,8],1:[2,6],5:[2,6],6:[2,6],7:[2,6],8:[2,6],15:[2,6]},{8:[2,7],7:[2,7],6:[2,7],5:[2,7],1:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7]},{1:[2,9],5:[2,9],6:[2,9],7:[2,9],8:[2,9],14:[2,9],13:[2,9],12:[2,9],11:[2,9],15:[2,9]},{1:[2,10],5:[2,10],6:[2,10],7:[2,10],8:[2,10],14:[2,10],13:[2,10],12:[2,10],11:[2,10],15:[2,10]},{1:[2,11],5:[2,11],6:[2,11],7:[2,11],8:[2,11],14:[2,11],13:[2,11],12:[2,11],11:[2,11],15:[2,11]},{4:14,15:[1,15],9:3,10:4,11:[1,5],12:[1,6],13:[1,7],14:[1,8]},{4:16,9:3,10:4,11:[1,5],12:[1,6],13:[1,7],14:[1,8]},{4:17,9:3,10:4,11:[1,5],12:[1,6],13:[1,7],14:[1,8]},{4:18,9:3,10:4,11:[1,5],12:[1,6],13:[1,7],14:[1,8]},{4:19,9:3,10:4,11:[1,5],12:[1,6],13:[1,7],14:[1,8]},{8:[2,8],7:[2,8],6:[2,8],5:[2,8],1:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8]},{15:[1,20],5:[1,9],6:[1,10],7:[1,11],8:[1,12]},{1:[2,13],5:[2,13],6:[2,13],7:[2,13],8:[2,13],14:[2,13],13:[2,13],12:[2,13],11:[2,13],15:[2,13]},{5:[2,2],6:[2,2],7:[1,11],8:[1,12],1:[2,2],15:[2,2]},{5:[2,3],6:[2,3],7:[1,11],8:[1,12],1:[2,3],15:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],1:[2,4],15:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],1:[2,5],15:[2,5]},{1:[2,12],5:[2,12],6:[2,12],7:[2,12],8:[2,12],14:[2,12],13:[2,12],12:[2,12],11:[2,12],15:[2,12]}],
defaultActions: {},
parseError: 
function parseError(str, hash) {
    throw new Error(str);
}
,
parse: 
function parse(input) {
    var self = this, stack = [0], vstack = [null], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.yy.parseError === "function") {
        this.parseError = this.yy.parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
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
            if (symbol == null) {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            if (!recovering) {
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                }
                var errStr = "";
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ");
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : ("'" + (this.terminals_[symbol] || symbol) + "'"));
                }
                this.parseError(errStr, {text:this.lexer.match, token:this.terminals_[symbol] || symbol, line:this.lexer.yylineno, expected:expected});
            }
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || "Parsing halted.");
                }
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                symbol = lex();
            }
            while (1) {
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || "Parsing halted.");
                }
                popStack(1);
                state = stack[stack.length - 1];
            }
            preErrorSymbol = symbol;
            symbol = TERROR;
            state = stack[stack.length - 1];
            action = table[state] && table[state][TERROR];
            recovering = 3;
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
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
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
    }
    return true;
}
};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:1,
parseError:
function parseError(str, hash) {
    if (this.yy.parseError) {
        this.yy.parseError(str, hash);
    } else {
        throw new Error(str);
    }
}
,
setInput:
function (input) {
    this._input = input;
    this._more = this._less = this.done = false;
    this.yylineno = this.yyleng = 0;
    this.yytext = this.matched = this.match = "";
    this.conditionStack = ["INITIAL"];
    return this;
}
,
input:
function () {
    var ch = this._input[0];
    this.yytext += ch;
    this.yyleng++;
    this.match += ch;
    this.matched += ch;
    var lines = ch.match(/\n/);
    if (lines) {
        this.yylineno++;
    }
    this._input = this._input.slice(1);
    return ch;
}
,
unput:
function (ch) {
    this._input = ch + this._input;
    return this;
}
,
more:
function () {
    this._more = true;
    return this;
}
,
pastInput:
function () {
    var past = this.matched.substr(0, this.matched.length - this.match.length);
    return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
}
,
upcomingInput:
function () {
    var next = this.match;
    if (next.length < 20) {
        next += this._input.substr(0, 20 - next.length);
    }
    return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
}
,
showPosition:
function () {
    var pre = this.pastInput();
    var c = new Array(pre.length + 1).join("-");
    return pre + this.upcomingInput() + "\n" + c + "^";
}
,
next:
function () {
    if (this.done) {
        return this.EOF;
    }
    if (!this._input) {
        this.done = true;
    }
    var token, match, lines;
    if (!this._more) {
        this.yytext = "";
        this.match = "";
    }
    var rules = this._currentRules();
    for (var i = 0; i < rules.length; i++) {
        match = this._input.match(this.rules[rules[i]]);
        if (match) {
            lines = match[0].match(/\n/g);
            if (lines) {
                this.yylineno += lines.length;
            }
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[i], this.conditionStack[this.conditionStack.length - 1]);
            if (token) {
                return token;
            } else {
                return;
            }
        }
    }
    if (this._input === "") {
        return this.EOF;
    } else {
        this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {text:"", token:null, line:this.yylineno});
    }
}
,
lex:
function lex() {
    var r = this.next();
    if (typeof r !== "undefined") {
        return r;
    } else {
        return this.lex();
    }
}
,
begin:
function begin(condition) {
    this.conditionStack.push(condition);
}
,
popState:
function popState() {
    return this.conditionStack.pop();
}
,
_currentRules:
function _currentRules() {
    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
}
});
lexer.performAction = 
function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
    YYSTATE = YY_START;
    switch ($avoiding_name_collisions) {
      case 0:
        break;
      case 1:
        return 11;
        break;
      case 2:
        return 12;
        break;
      case 3:
        return 13;
        break;
      case 4:
        return 5;
        break;
      case 5:
        return 6;
        break;
      case 6:
        return 8;
        break;
      case 7:
        return 7;
        break;
      case 8:
        return 14;
        break;
      case 9:
        return 15;
        break;
    }
}
;
lexer.rules = [/^\s+/,/^[a-zA-Z_][a-zA-Z0-9_]*/,/^[0-9]+\.[0-9]*/,/^[0-9]+/,/^\+/,/^-/,/^\*/,/^\//,/^\[/,/^\]/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined') {
exports.parser = logo;
exports.parse = function () { return logo.parse.apply(logo, arguments); }
exports.main = 
function commonjsMain(args) {
    if (!args[1]) {
        throw new Error("Usage: " + args[0] + " FILE");
    }
    if (typeof process !== "undefined") {
        var source = require("fs").readFileSync(require("path").join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset:"utf-8"});
    }
    return exports.parser.parse(source);
}

if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}