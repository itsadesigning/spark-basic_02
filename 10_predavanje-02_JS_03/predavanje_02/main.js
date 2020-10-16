/* Object initialization */

var obj1 = { a: 5 };

var obj2 = new Object();

console.log(obj1, obj2);

/* Object structure / defining and accesing properties */

/* Example 1: */

var objStructEx1 = {
  username: 'korisnik',
};

console.log(objStructEx1.username);

/* Example 2: */

var objStructEx2 = {};

objStructEx2.username = 'korisnik2';

console.log(objStructEx2.username);

/* Example 3: */

var objStructEx3 = {};

objStructEx3['username'] = 'korisnik3';

console.log(objStructEx3['username']);

/* Zadatak 1: */

var house = {
  numOfFloors: 5,
  numOfSquares: 600,
  facadeColor: 'peach'
};

var house_example_2 = {};
house_example_2.numOfFloors = 5;
house_example_2.numOfSquares = 600;
house_example_2.facadeColor = 'peach';

var house_example_3 = {};
house_example_3['numOfFloors'] = 5;
house_example_3['numOfSquares'] = 600;
house_example_3['facadeColor'] = 'peach';

console.log(house, house_example_2, house_example_3);

var car = {};
var owners = ['Leo DiCap', 'Dan D Lew', 'Joaq Phy', 'B Pitt', 'C Waltz'];

for(var i = 0; i < 5; i++) {
  car['owner_'+(i+1)] = owners[i];
}

console.log(car);
/* console.log({ ...car });
console.log(Object.assign({}, car)); */

delete car.owner_5;

var forObj = {
  a: 1,
  b: 2,
  c: 3,
};

for (var key in forObj) {
  console.log(key, forObj[key]);
}

var forArr = ['1', '2', '3'];

for (var i of forArr) {
  console.log(i);
}

/* 
EQUALS TO:

for (var i = 0; i < forArr.length; i++) {
  console.log(i);
} 
*/

var book = {
  author: 'Ivo Andrić',
  book: 'Na Drini ćuprija',
  year: 1945,
  burnTheBook: function() {
    delete this.book;
  },
}

for (var key in book) {
  if (typeof book[key] !== 'function') {
    console.log(key, book[key]);
  }
}

book.burnTheBook();

var bookObjKeys = Object.keys(book);

console.log(bookObjKeys);

/* Zadatak 7 */

var bus = {
  type: 'bus',
  numOfPassengers: 4,
  maxNumOfPassengers: 55,
};

function addPassengersToVehicle (vehicle, numOfPassengers) {
  if ((numOfPassengers + vehicle.numOfPassengers) > vehicle.maxNumOfPassengers) {
    console.log('That is too much passengers, and we are not Globtour.');
  } else {
    vehicle.numOfPassengers = (numOfPassengers + vehicle.numOfPassengers);
    console.log('You have successfully added ' + numOfPassengers + ' people to the ' + vehicle.type + '. Currently, ' + vehicle.numOfPassengers + ' passengers are in the bus, and the maximum allowed is ' + vehicle.maxNumOfPassengers + '.');
  }
}

addPassengersToVehicle(bus, 23);
addPassengersToVehicle(bus, 29);

/* Zadatak 8 */

var movie = {
  name: 'The Godfather',
  duration: 175,
  rating: 9.2,
  actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard Castellano']
};

for (var key in movie) {
  if (key === 'actors') {
    for (var actor of movie[key]) {
      if (actor.split(' ')[1].charAt(0).toUpperCase() === 'C') {
        console.log('actor - ' + actor)
      }
    }
  } else {
    console.log(key + ' - ' + movie[key])
  }
}

var movies = [
  {
      name: 'The Godfather',
      duration: 175,
      rating: 9.2,
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard Castellano']
  },
  {
      name: 'The Shawshank Redemption',
      duration: 142,
      rating: 9.3,
      actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
  },
  {
    name: 'Twelve Angry Men',
    duration: 142,
    rating: 9.4,
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
  },
];

var highestRatedMovie = {
  rating: 0
};

for (var movie of movies) {
  console.log('Movie name: ' + movie.name);
  if (movie.rating > highestRatedMovie.rating) {
    highestRatedMovie.name = movie.name;
    highestRatedMovie.rating = movie.rating;
  }
}

console.log('Highest rated movie is ' + highestRatedMovie.name + ' with rating of ' + highestRatedMovie.rating + '.');