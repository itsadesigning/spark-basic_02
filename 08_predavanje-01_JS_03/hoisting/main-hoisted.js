/* main.js hoisted example */

var x, functionExpressionName;

function functionDeclarationName() {
  var x = "Declare something!";

  console.log(x);
}

console.log(functionDeclarationName);
console.log(functionDeclarationName());
console.log(functionExpressionName);
console.log(functionExpressionName());

x = "Beyond every function.";

console.log(x);

functionExpressionName = function () {
  var x = "Express something!";

  console.log(x);
};
