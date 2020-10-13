/* 
  DRY - don't repeat yourself
*/

/**
 * Function example (declarative/statement)
 * parameter can be:
 * Object,
 * Function,
 * Array,
 * other primitive types
 *
 * Example is the function itself
 */

function functionName(parameter, parameter_2, parameter_3) {
  /* ... */
}

/**
 * Function example (literal/expression)
 *
 * Anonymous function example:
 *
 * function(parameter, parameter_2, parameter_3) {
 *    // Function scope
 *
 *    statement;
 *    statement;
 *
 *    return; // which is also a statement
 * }
 *
 * Declares variable Initializes anonymous function.
 * Equals to
 *  var functionName;
 *  functionName = function(parameter, parameter_2, parameter_3) {
 *
 *  };
 */

var functionName = function (parameter, parameter_2, parameter_3) {
  /* ... */
};

/* 
  Function invocation. Calling of the function. Executing function:

  functionName(1, 'nekiTamoTekst', { name: 'AAAAAAAAA' });
  functionName(3, 'tekstic', { name: 'Ivan' });
  functionName('parametar', function() {}, [1, 6, 24]);

  <button onclick="sayHello()">Click me</button>
  */

var functionExpressionWithReturnStatement = function (first, second) {
  /* Return stops code execution in a function scope */
  if (!first || !second) return;

  /* Usually on the end of the function */
  return first + second;
};

console.log(functionExpressionWithReturnStatement(12, 2));
var sum = functionExpressionWithReturnStatement(1, 6);

/* 
  Check later:
  =
  =
  =
  =
  =
  =
  =
  =
  =
  =
  =
  =
  =
  =
  =
  =
  =
*/

/**
 * IIFE - immidiately invoked function expression
 *
 * (function () {}) - declaration of the function (functionName)
 * () - invokation of the function
 *
 * Example from above:
 * functionName();
 * */

(function () {})();

console.log(CONSTANT_env, "|", UTIL_FUNC());

/* 
  How did JavaScript specification enabled hoisting prevention:
    * New variable types: const, let
    * With them we can generally write only function expressions instead of function declarations
    
  Before that we used IIFE (immediately invoked function expression):
    * Our entire file would be wrapper with an anonymous function that calls itself so it has its own scope instead of global one
*/

(function () {
  /* Entirety of our main.js file, check iffy.js */
});
