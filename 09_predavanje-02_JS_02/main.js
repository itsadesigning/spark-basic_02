var arr = [0,3,6,9];
var str = "neki tamo string";

console.log(arr);
console.log(str);

/* 
  Metode koje mijenjaju vrijednost polja nad kojim ih pozivamoČ
    * push
    * pop
    * unshift
    * shift
    * splice

  Metode koje ne mijenjaju vrijednost:
    * slice

  String metode koje ne mijenaju vrijednost
    * split
    * replace
    * slice
*/

/* 
Zadatak 1:

var numbArr = [];

for (var i = 0; i < 7; i++) {
  numbArr[i] = parseInt(prompt('Unesi neki broj:'));
}

numbArr.splice(numbArr.length - 3);

console.log(numbArr); 
*/

console.log('================================================');

var prices = ['KM 1.00', 'KM 1.85', 'KM 19.99'];
var sum = 0;

for(var i = 0; i < prices.length; i++) {
  var price = prices[i].split(' ')[1];
  // var price = prices[i].substring(3);
  // var price = prices[i].slice(3);
  sum = sum + parseFloat(price);
}

console.log(sum);

var randNumbArr = [7, 5, 12, -4 , 0, 9];

// sort() i reverse()

console.log(randNumbArr);

var indLastInd = ['a', 'b', 'g', 'd', 'b', 't'];

console.log(indLastInd);

if (indLastInd.indexOf('d') > -1) {
  console.log('Sadrzim d');
} else {
  console.log('Ne sadrzim d');
}

console.log(indLastInd.indexOf('d'));

/* Zadatak 2: */

/* var numbers = [],
	num;

// Ponavljaj dok niz ne bude sadržavao točno 5 elemenata
while (numbers.length < 5) {
	num = parseInt(prompt('Unesite dvoznamenkasti broj'));
    
    // Ako se broj nalazi u intervalu 10-99 (tj. ako je dvoznamenkast)
	// i ako ne postoji već u nizu 'numbers'
    if ((num > 9 && num < 100) && numbers.indexOf(num) === -1) {
    	// Dodaj broj u niz
    	numbers.push(num);
    }
}

console.log('Uneseni brojevi: ' + numbers); */

/* Zadatak 5: */

var numbers = [];

while (numbers.length < 3) {
  var num = parseInt(prompt('Unesi neki broj'));

  if ((num >= 0 && num < 10) && numbers.indexOf(num) === -1) {
    numbers.push(num);
  } 
}

var matrix = [];

for(var i = 0; i < 3; i++) {
  matrix[i] = [];
  for (var j = 0; j < numbers.length; j++) {
    matrix[i][j] = Math.pow(numbers[j], i);
  }
}

/* for(var i = 0; i < 3; i++) {
  switch (i) {
    case 0:
      matrix[i] = numbers.slice();
      break;
    case 1: 
      matrix[i] = [];
      for (var j = 0; j < numbers.length; j++) {
        matrix[i][j] = numbers[j] * numbers[j];
      }
      break;
    case 2:
      matrix[i] = [];
      for (var j = 0; j < numbers.length; j++) {
        matrix[i][j] = numbers[j] * numbers[j] * numbers[j];
      }
      break;
    default:
      break;
  }
}   */

console.log(matrix);