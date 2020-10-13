// Function *expression* / literal
var capitalizeInput = function(elem) {
  var output = document.getElementById('output');
  // elem.target.value is 'string' type
  output.textContent = elem.value.charAt(0).toUpperCase() + elem.value.slice(1);

  document.body.insertBefore(output, document.getElementsByTagName('script')[0]);
};

// Function *declaration* / statement 
/* function capitalizeInput() {

} */

/* Upisivanje elemenata u niz */
// var arr = [1, 2, 3, 4 , 5, 6, 7, 8, 9];

// result: arr = [1, 2, 3, ... , 1, 1];

var logLinearArray = function(elem) {
  var number = parseInt(elem.value);

  var arr = [];
  for(var i = 0; i < number; i++) {
    arr[i] = i + 1;
  }

  console.log(arr); // [1, 2, 3 ...]

  for(var i = 0; i < number; i++) {
    console.log(i + ' clan polja ima vrijednost ' + arr[i]);
  }
}

var logOddArray = function(elem) {
  var number = parseInt(elem.value);

  var arr = [];
  for(var i = 0; i < number; i++) {
    arr[i] = i + 1;
  }

  console.log(arr); // [1, 2, 3 ...]

  var oddArr = [];
  var evenArr = [];

  for(var i = 0; i < number; i++) {
    if (arr[i] % 2) {
      oddArr.push(arr[i]);
      console.log(i + '. parni clan polja ima neparnu vrijednost ' + arr[i]);
    } else {
      evenArr.push(arr[i])
      console.log(i + '. neparni clan polja ima parnu vrijednost ' + arr[i]);
    }
  }

  console.log(oddArr, oddArr.length);
  console.log(evenArr, evenArr.length);
}
/* 
 * Opens up a dialog on the browser that collects user input.
 * @params {string} message
 * @params {string} _default
 * @return {number} value
 *
 * function randomFunc(params) {
 * 
 * }
 */

/* var userInputArr = [];
for(var i = 0; i < 8; i++){
  // sad23 => 23
  // a1234cas. => 1234
    userInputArr[i] = parseInt(prompt('Insert some numeric value'));
}

console.log(userInputArr[3], userInputArr[0] + userInputArr[4]) */

/* 
  arr.push() - adds value passwed to method to the end of the array  and returns the new length of the array
  arr.pop() - removes arrays last member and returns its value
  arr.unshift() array value passed to method to the beginning of the array and returns the new length of the array
  arr.shift() - removes arrays first member and returns its value

*/

var arrayMethods = [2, 3, 4, 5, 6];

console.log('arrayMethods', arrayMethods);

console.log('arrayMethods.push(7)', arrayMethods.push(7), 'arrayMethods.push(12)', arrayMethods.push(12), arrayMethods)

console.log('arrayMethods.pop()', arrayMethods.pop(), arrayMethods)

console.log('arrayMethods.unshift(1)', arrayMethods.unshift(1), 'arrayMethods.unshift(-15)', arrayMethods.unshift(-15), arrayMethods)

console.log('arrayMethods.shift()', arrayMethods.shift(), arrayMethods)

var text = 'Hello World!';

text[1] = 'a';

for(var i = 0; i < text.length; i++) {
	console.log(text[i]);
}
