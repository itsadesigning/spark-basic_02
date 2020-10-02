// First comment type - singleline
// This is also single line

/* 
  Second comment type - multiline
*/

/* Deklaracija */
console.log("Declaration:");
var apples;
var x;
var y;
var someString;

console.log("Before init: someString =>", someString); // undefined

/* Inicijalizacija */
console.log("Initialization:");
apples = 3;
x = 5;
y = 10;
someString = "Neki tamo tekst!";

console.log("After init: someString =>", someString); // undefined

/* Deklaracija i inicijalizacija */
console.log("Declaration with initialization:");
var z = "Boy has " + apples + " apples.";
var counter = 0;

console.log("Displaying multiple variables:", z, counter);

var a = "a",
  b = "TEKSTINA.",
  c = 100000;

/* untyped language */

var typeUndefined = undefined,
  typeNull = null,
  typeBoolFalse = false,
  typeBoolTrue = true,
  typeInteger = 1,
  typeString = "Tekst",
  typeFunction = function () {},
  typeObject = {},
  typeArray = [],
  typeRegexp = /abc/g;

console.log(
  "==============================================================================================="
);

/* Global scope */
console.log(window);

var someRandomVar = "window";

function funcA() {
  /* Local scope of funcA */
  /* 
    All which is declared in the global scope (window), i.e. out of this function is available from within this function.

    All which is declared in the local scope of this function, in the function, is not available to the global scope, but is available to the local scope.
  */
  console.log(a, b, c);

  var someRandomVar = "funcA";
  console.log("funcA -> someRandomVar", someRandomVar);
}

funcA(); // Poziv funkcije
console.log(someRandomVar);

/* Naming of the variables */

/* 
THIS IS NOT OK. It will throw error.
  var let;
  var const;
  var function;
  var typeof; 
  var boolean; 
  var return; 
  var function; 
  var 123x;
*/

// THIS IS OK.
var _123x, _variable_02;

// Two separate variables. JS is case-sensitive.

var name, Name;

console.log(
  "==============================================================================================="
);

var _x = 5,
  _y = 3;

console.log("var _x = 5,\n    _y = 3;");
console.log("_x + _y =", _x + _y);
console.log("_x - _y =", _x - _y);
console.log("_x * _y =", _x * _y);
console.log("_x / _y =", _x / _y);
console.log(
  "_x % _y =",
  _x % _y,
  'Info: calculates the remain of two number division. We call it "modulo".'
);
console.log("_x++ =", _x++, " SAME AS ", "_x = _x + 1", "_x += 1");
console.log("_x-- =", _x--, " SAME AS ", "_x = _x - 1", "_x -= 1");
console.log("_x *= _y", (_x *= _y), " SAME AS ", "_x = _x * _y");
console.log("_x /= _y", (_x /= _y), " SAME AS ", "_x = _x / _y");
console.log("_x %= _y", (_x %= _y), " SAME AS ", "_x = _x % _y");

var _A = 5,
  _B = 7;

console.log("var _A = 5,\n    _B = 7;");
console.log("_A == _B", _A == _B);
console.log("_A != _B", _A != _B);
console.log("_A > _B", _A > _B);
console.log("_A < _B", _A < _B);
console.log("_A >= _B", _A >= _B);
console.log("_A <= _B", _A <= _B);
console.log("_A == _B", _A == _B);
console.log("_A == _B", _A == _B);

console.log(
  "PREPORUKA (mora slijediti): UVIJEK KORISTITI 3 znaka jednakosti ===, umjesto 2 znaka ==."
);

console.log('5 == "5"', 5 == "5");
console.log('5 === "5"', 5 === "5");
console.log('5 != "5"', 5 != "5");
console.log('5 !== "5"', 5 !== "5");

console.log(
  "==============================================================================================="
);
console.log("&& LOGIČKI OPERATOR:");
console.log("false && false => ", false && false);
console.log("true && false => ", true && false);
console.log("false && true => ", false && true);
console.log("true && true => ", true && true);

console.log("NOTE: !false => ", !false, "!true => ", !true);

console.log("!(boolean && boolean) LOGIČKI OPERATOR:");
console.log("!(false && false) => ", !(false && false));
console.log("!(true && false) => ", !(true && false));
console.log("!(false && true) => ", !(false && true));
console.log("!(true && true) => ", !(true && true));

console.log("!boolean && !boolean LOGIČKI OPERATOR:");
console.log("!false && !false => ", !false && !false);
console.log("!true && !false => ", !true && !false);
console.log("!false && !true => ", !false && !true);
console.log("!true && !true => ", !true && !true);

console.log(
  "==============================================================================================="
);

console.log("|| LOGIČKI OPERATOR:");
console.log("false || false => ", false || false);
console.log("true || false => ", true || false);
console.log("false || true => ", false || true);
console.log("true || true => ", true || true);

console.log("NOTE: !false => ", !false, "!true => ", !true);

console.log("!(boolean || boolean) LOGIČKI OPERATOR:");
console.log("!(false || false) => ", !(false || false));
console.log("!(true || false) => ", !(true || false));
console.log("!(false || true) => ", !(false || true));
console.log("!(true || true) => ", !(true || true));

console.log("!boolean || boolean LOGIČKI OPERATOR:");
console.log("!false || !false => ", !false || !false);
console.log("!true || !false => ", !true || !false);
console.log("!false || !true => ", !false || !true);
console.log("!true || !true => ", !true || !true);

console.log("===============================================================================================");

console.log("true && true || false && true => ", true && true || false && true);

console.log(false && true || true && true);
console.log("2. true || false || false && true => ", true || false || false && true);
console.log("3. false && false && true => ", false && false && true);

console.log("===============================================================================================");

/* 
  Truthy: 
    * true
    * 'neki tamo string'
    * 'false' 
    * []
    * ['string']
    * {}
    * 1
    * 56

  Falsy: 
    * false
    * 0
    * ''
    * undefined
    * null
    * NaN (NotANumber)
*/

console.log("1. {} && 0 || 45 && ['string'] && NaN =>");
console.log("Equivalent => true && false || true && true && false => false");

console.log("2. null || [] || 'false' && 1 => true", null || [] || 'false' && 1);
console.log("3. { user: 'user' } && '' || true => true", { user: 'user' } && '' || true);
console.log("4. false && (undefined || 'false') && !!{} => false", false && (undefined || 'false') && !!{});

console.log("Kako bi prebacili truthy i falsy vrijednosti u njihov boolean ekvivalent koristimo !! sa lijeve strane => !!null === false, !![] === true")

console.log("Vrijednosti grupiramo pomocu !!((true && false || true) && true)");

console.log("===============================================================================================");

console.log("typeof 2 => ", typeof 2);
console.log("typeof '2' => ", typeof '2');
console.log("typeof [2] => ", typeof [2]);
console.log("typeof {} => ", typeof {});
console.log("typeof function() {} => ", typeof function() {});
console.log("typeof null => ", typeof null);
console.log("typeof undefined => ", typeof undefined);

/* 
HOW TO CUSTOMIZE EDITOR:
  1. Download some VSCode theme. (Extensions => e.g. Horizon, Slime, Bear, etc.);
  2. Download Bracket Pair Colorizer 2.
  3. Download Indent Rainbow. Change settings in VSCode's settings.json (Ctrl + Shift + P).
  4. Download Fira Code Font. Set it as default font and enable ligatures:
  {
    "editor.fontFamily": "'Fira Code'",
    "editor.fontLigatures": true
  }
*/

/* Etc */

/* Real life examples: */

function giveAnAppleToTheKid() {
  console.log("Kid recieves one apple.");
  apples = apples + 1; // apple++;
  console.log("Boy has " + apples + " apples.");
  document.getElementById("apple-count").textContent = apples;
}

function takeAnAppleFromTheKid() {
  console.log("Kid loses an apple.");
  apples--; // apple = apple - 1;
  console.log("Boy has " + apples + " apples.");
  document.getElementById("apple-count").textContent = apples;
}
