var person = {
  jmbg: null,
  firstName: null,
  lastName: null,
};

for (var key in person) {
  var input;
  do {
    input = prompt();
    
    if (key === 'jmbg') {
      console.log(key);
      if (parseInt(input).length === 13) {
        person[key] = parseInt(input);
      }
    } else if (key === 'firstName' || key === 'lastName') {
      if (input.length >= 3 && !input.match(/\d+/g)) {
        person[key] = input;
      }
    } else {
      console.log('Something went wrong!')
    }
  } while (person[key])
}