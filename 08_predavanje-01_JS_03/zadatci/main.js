/* ZADATAK 1 */

var returnSmallerNumber = function (first, second) {
  if (first < second) {
    return first;
  } else if (second < first) {
    return second;
  } else {
    console.log("The numbers are equal.");
    return null;
  }
};

var result = returnSmallerNumber(5, 5);

console.log(result);

console.log(
  "=============================================================================="
);

/* ZADATAK 2 */

var maxOfThree = function (first, second, third) {
  if (first > second && first > third) {
    return first;
  } else if (second > first && second > third) {
    return second;
  } else if (third > first && third > second) {
    return third;
  } else {
    console.log("The numbers are equal.");
    return null;
  }
};

console.log(maxOfThree(5, 2, 13));

console.log(
  "=============================================================================="
);

var daysInMonth = function (month) {
  /*   switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
    default:
      return "U've entered invalid value, enter values between 1 - 12.";
  } */

  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else if (month === 2) {
    return 28;
  } else {
    return "U've entered invalid value, enter values between 1 - 12.";
  }
};

console.log(daysInMonth(2));
console.log(daysInMonth(5));
console.log(daysInMonth(7));
console.log(daysInMonth(12));
console.log(daysInMonth(14));
