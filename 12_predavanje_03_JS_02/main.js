var test1 = function (callback) {
  console.log('test1');
  callback();
}

var test2 = function () {
  console.log('test2');
}

test1(test2);

console.log('======================================');

var acceptArgsCallback = function(a, callback) {
  callback(a);
}

var logArgs = function(b) {
  console.log(b);
}

acceptArgsCallback(5, logArgs);

console.log('======================================');

var main = function (a, b, callback) {
  return callback(a, b);
}

var score = main(2,2, function(c, d) {
  console.log(c + d);
  return c + d;
});

setTimeout(function () {
  console.log('ovo ce se izvrsiti nakon jedne sekunde')
}, 2000);

var interval = setInterval(function () {
  console.log('ovo ce se izvrsavati svake sekunde')
}, 1000);

var func = function () {

}

func();
setTimeout(func, 1000);
setInterval(func, 1000);

/* Zadatak 7 */

console.log('======================================');

function assignment07 (callback) {
  setTimeout(callback, 5000);
}

function assignment07_02 () {
  clearInterval(interval);
  console.log('AAAAAAAAAAAAAAAAa')
}

assignment07(assignment07_02)