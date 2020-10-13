var x = "global";

function someFunction() {
  var y = 10;

  function someFunctionWithinAFunction(str) {
    return str;
  }

  return someFunctionWithinAFunction("someFunctionWithinAFunction");
}

console.log(y); // logs undefined
console.log(someFunctionWithinAFunction); // logs undefined cause it is not declared in the scope in which it's invoked
someFunction(); // logs someFunctionWithinAFunction
