var serverResponse = {
  status: "success",
  message: "Shopping cart fetched successfuly",
  data: [
    {
      // [0]
      product: "bread",
      cost: 4,
      quantity: 2,
    },
    {
      // [1]
      product: "lemon",
      cost: 2,
      quantity: 1,
    },
    {
      product: "onion",
      cost: 13,
      quantity: 1,
    },
    {
      product: "ice",
      cost: 1,
      quantity: 4,
    },
    {
      product: "chocolate",
      cost: 53,
      quantity: 1,
    },
    {
      product: "cola",
      cost: 21,
      quantity: 3,
    },
    {
      product: "plazma",
      cost: 3,
      quantity: 7,
    },
    {
      product: "brohnhi",
      cost: 8,
      quantity: 1,
    },
    {
      product: "stock",
      cost: 2,
      quantity: 4,
    },
    {
      product: "jana",
      cost: 1,
      quantity: 1,
    },
    {
      product: "kiseljak",
      cost: 2,
      quantity: 2,
    },
    {
      product: "cigarette_pack",
      cost: 5,
      quantity: 15,
    },
    {
      // [12]
      product: "coffee",
      cost: 5,
      quantity: 8,
    },
  ],
};

var shoppingCart = serverResponse.data;

/* 
  WHILE

  Description:
    * Iterates the loop until provider condition is false

  Format:
  while (condition) {
    ...
  }
*/

var i = 10;

while (i > 0) {
  console.log(
    "WHILE LOOP: " + (i + 1) + ". iteration with i value set to " + i
  );
  // console.log("Infinite loop, make it stop!!!");
  // i = i + 1;
  // i += 1;
  i--;
}

/* 
  do while 

  Description:
    * Only difference from while is that the first loop entry is not conditioned (loop will execute at least once)

  do {
    ...
  } while (condition)
*/

var j = 0;
// var index = 0;

do {
  console.log("DO WHILE LOOP: " + "Iteration with j value set to " + j);
  j--;
} while (j >= -4);

/* 
  for

  Format:
  for (<initialize iterator value>; <check condition>; <modify iterator>) {
    <execute loop>
  }

  Order of execution:
  1. <initialize iterator value>
  2. <check condition>
  3. <execute loop>
  4. <modify iteration>
  5. <check condition>
  6. <execute loop>
  7. <modify iteration>
  8. <check condition> - when false, exit loop.
*/

for (var i = 0; i <= 5; i++) {
  console.log(
    "FOR LOOP: " + (i + 1) + ". loop execution with i value set to " + i
  );
}

/* 

Length property existing on every array to specify array length.

[].length
Array.length 

*/

console.log("*** DISCLAIMER .length ***");

console.log("[].length ", [].length);
console.log("[0, 1, 2].length ", [0, 1, 2].length);
console.log(
  "['glupost jedan', {}, undefined].length ",
  ["glupost jedan", {}, undefined].length
);

console.log("=======================");

for (var i = 0; i < shoppingCart.length; i++) {
  var item = serverResponse.data[i];
  var div = document.createElement("div");

  // Izadji iz funkcije, ne izvrsavaj kod nakon

  console.log(
    "You have bought " +
      item.quantity +
      " " +
      item.product +
      " at cost of " +
      item.cost +
      " BAM."
  );

  div.innerHTML =
    "You have bought " +
    item.quantity +
    " " +
    item.product +
    " at cost of " +
    item.cost +
    " BAM.";

  document.body.insertBefore(div, document.body.firstElementChild);
}

// [1,4,2] - Matrica (?)
// [[1,4,2], [1,4,2], [1,4,2], [1,4,2]] - Polje matrica

var fieldOfMatrix = [
  [1, 4, 2],
  [9, -4, 1],
  [-2, undefined, 2],
  [1, -23, 2],
];

/* 
for (var i = 0; i < fieldOfMatrix.length; i++) {
  console.log(fieldOfMatrix[i]);
  var matrix = fieldOfMatrix[i]; // [1, 4, 2]
  for (var j = 0; j < matrix.length; j++) {
    console.log(
      j + 1 + ". matrix value of the " + (i + 1) + ". matrix is " + matrix[j]
    );
  }
}
 */

for (var i = 0; i < fieldOfMatrix.length; i++) {
  console.log(fieldOfMatrix[i]);
  var matrix = fieldOfMatrix[i]; // [1, 4, 2]
  for (var j = 0; j < matrix.length; j++) {
    /* if (matrix[j] === undefined) {
      break;
    } */
    if (matrix[j] === undefined) break; // Exits the loop completely
    if (matrix[j] < 1) continue; // Skips the rest of the iteration and continues with next one.
    console.log(
      j +
        1 +
        ". positive matrix value of the " +
        (i + 1) +
        ". matrix is " +
        matrix[j]
    );
  }
}

console.log("ZADATAK 6");

do {
  var firstInsertedNumber = parseInt(prompt("Insert first number"));
  var secondInsertedNumber = parseInt(prompt("Insert second number"));
  var difference = secondInsertedNumber - firstInsertedNumber;
} while (difference < 0);

var difference = secondInsertedNumber - firstInsertedNumber;

for (var i = 0; i < difference; i++) {
  var number = firstInsertedNumber + (i + 1);
  if (number % 2) {
    console.log("Number " + number + " is even.");
  } else {
    console.log("Number " + number + " is odd.");
  }
}
