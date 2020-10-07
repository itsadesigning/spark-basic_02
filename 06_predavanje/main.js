function changeElementBackground(hexColor) {
  if (hexColor === "#00FF00") {
    console.log("SUCCESS!");
  } else {
    console.log("COLOR!");
  }

  if (hexColor === "#FF0000") return;

  var div = document.createElement("div");
  div.innerText = "NEKI TAMO TEKST";
  div.style.backgroundColor = hexColor;

  var body = document.getElementsByTagName("body")[0];
  body.insertBefore(div, body.lastElementChild);
}

function addToSum(value) {
  var sumElement = document.getElementById("sum"),
    currentSum = parseInt(sumElement.innerText),
    parsedValue = parseInt(value);

  if (value === "Reset") {
    // Vrijednost mora biti tocno "Reset"
    sumElement.innerText = 0;
  } else if (parsedValue >= 1 && parsedValue <= 25) {
    // Vrijednost mora biti veca ili jednaka od 1 i manja ili jednaka od 25 (1 - 25);
    console.log("Good job for betting rationally.");
    sumElement.innerText = currentSum + parsedValue;
  } else if (parsedValue > 25 && parsedValue <= 100) {
    // Vrijednost mora biti veca od 25 i manja ili jednaka od 100 (1 - 100);
    console.log("Not sure if that's a good idea, but go for it.");
    sumElement.innerText = currentSum + parsedValue;
  } else if (parsedValue > 100 && parsedValue <= 250) {
    // Vrijednost mora biti veca od 100 i manja ili jednaka od 250 (1 - 250);
    console.log("Hold it right there champ!");
  } else if (parsedValue === 500) {
    // Vrijednost mora tocno 500 (i tip i vrijednost, i.e. '500' ne bi radilo);
    console.log("It's time to leave sir.");
  } else {
    // U slucaju da niti jedan od gornjih uvjeta nije zadovoljen izvrsi ovo.
    console.log(
      "Something went wrong with the amount you wanted to insert. VALUE: ",
      parsedValue
    );
  }
}

var items = [];

function checkValue(value) {
  switch (value) {
    case "Box":
      console.log("You've added a box");
      break;
    case "Card":
      console.log("You've added a card");
      break;
    case "Bag":
      console.log("You've added a bag");
      break;
    case "Cup":
      console.log("You've added a cup");
      break;
    case "Bottle":
      console.log("You've added a bottle");
      break;
    default:
      console.log("The item you entered is invalid");
  }
}

function checkValueOptimized(value) {
  console.log("You've added a " + value);
  items.push(value);
  console.log(items);
}

/* 
  if (value === 'Box') {
    console.log("You've added a box");
    items.push(value);
  } else if (value === 'Card') {
    console.log("You've added a card");
    items.push(value);
  } else if (value === 'Bag') {
    console.log("You've added a bag");
    items.push(value);
  } else if (value === 'Cup') {
    console.log("You've added a cup");
    items.push(value);
  } else if (value === 'Bottle') {
    console.log("You've added a bottle");
    items.push(value);
  } else {
    console.log("The item you entered is invalid");
  }
*/
