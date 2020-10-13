/* 
  Hoisting when browser reads our code:
    * it will first transfer all functions to the top
    * it will first transfer all variable (var) declarations to the top
  
  Appended directly to global `window` object (vars and functions)
*/

console.log(window);

console.log(functionDeclarationName); // logs entire function
console.log(functionDeclarationName()); // logs 'Declare something!'
console.log(functionExpressionName); // logs undefined
console.log(functionExpressionName()); // logs undefined

var x = "Beyond every function.";

console.log(x);

/* JSDoc oblik komentara: */

/**
 * Function declaration / statement
 */

function functionDeclarationName() {
  var x = "Declare something!";

  console.log(x);
}

/**
 * Function expression / literal
 */

var functionExpressionName = function () {
  var x = "Express something!";

  console.log(x);
};
