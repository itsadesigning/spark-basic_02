var car = {
  isRunning: false, 
  start: function() {
    console.log('Starting car, current state: ', this.isRunning ? 'Engine running.' : 'Engine halt.', ' Starting car.');
    this.isRunning = true;
    return this.isRunning;
  },
  stop: function() {
    console.log('Halting car engine, current state: ', this.isRunning ? 'Engine running' : 'Engine halt', '. Stop car.');
    this.isRunning = false;
    return this.isRunning;
  },
};

car.start(); // this ovisi o objektu na kojem se metoda poziva.
console.log(car.isRunning);

car.stop();
console.log(car.isRunning);



/* var start = function () {

};

start(); */

var time = {
  seconds: 210,
  convertToMin: function() {
    this.minutes = Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;
    console.log(this.minutes + ':' + this.seconds);
  },
};

time.convertToMin();
console.log(time);

console.log('===========================================')

var obj = {
  propA: 1,
  propB: function() {
    console.log(this);
    return this.propA;
  },
}

obj.propB();
console.log(obj);



/* 
  this:
    * ovisi o kontekstu objekta nad kojim se metoda poziva
    * this je dostupan unutar metoda objekta (key: function(){})
    * this referencira na objekt unutar kojeg se this nalazi
    * obj je vlastita imenica, odnosno naziv, odnosno referenca na objekt koju mozemo koristiti nakon deklariranja i inicijalizacije istog objekta
    * this je zamjenica tog istog objekta, putem koje referenciramo taj objekt unutar njega samog, to jest unutar metode u kojoj ga pozivamo
    */

function someFunc() {
  console.log(this);
}

someFunc();

console.log('===========================================');

var test = {
  ostvareniBodovi: 48,
  maxBodovi: 75,
  ocjena: 0,
  calculateGrade: function() {
    var percentage = (this.ostvareniBodovi / this.maxBodovi) * 100;
    switch (true) {
      case percentage > 80:
        this.ocjena = 5;
        break;
      case percentage <= 80 && percentage > 60:
        console.log(percentage);
        this.ocjena = 4;
        break;
      case percentage <= 60 && percentage > 40:
        this.ocjena = 3;
        break;
      case percentage <= 40 && percentage > 20:
        this.ocjena = 2;
        break;
      default:
        this.ocjena = 1;
    }

    return this.ocjena;
  }
};

console.log(test.calculateGrade());

console.log('===========================================', 'Zadatak 4');

var desert = {
  name: 'cheesecake',
  type: 'cake',
  numOfPieces: 3,
  weight: 300,
  eat: function() {
    this.numOfPieces -= 1;
  },
  calculate: function() {
    return (this.numOfPieces * this.weight) / 1000 + 'kg' 
  }
};

console.log(desert.calculate());

/* VALUE VS REFERENCE */

var desert_A = desert;

desert_A.numOfPieces = 6;

console.log(desert);

/* 
  UTILITY OBJECTS IN JS:
  Math,
  Date,
  Object,
  Array,
  ...
*/

var date = new Date();

console.log('date.getDate()', date.getDate());
console.log('date.getMonth()', date.getMonth());
console.log('date.getFullYear()', date.getFullYear());
console.log('date.getHours()', date.getHours());
console.log('date.getMinutes()', date.getMinutes());
console.log('date.getSeconds()', date.getSeconds());
console.log('date.toDateString()', date.toDateString());
console.log('date.toLocaleDateString()', date.toLocaleDateString('hr'));
console.log('date.toISOString()', date.toISOString());

