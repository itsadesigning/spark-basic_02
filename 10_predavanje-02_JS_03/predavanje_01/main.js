/* Object literal */

/* 
var emptyObj = {
  someProperty: 'string',
};
  
EQUALS:

var emptyObj = {};
emptyObj.someProperty = 'string';
*/

var rectangle = {
  x: '120px', // key: value
  y: '160px',
  color: 'brown',
  borderRadius: '25px',
  content: 'Lorem ipsum',
  calculateSurface: function() {
    return parseInt(this.x.slice(0, this.x.length - 2)) * parseInt(this.y.slice(0, this.y.length - 2));
  }
};

rectangle.x = '400px';

var div = document.createElement('div');
div.style.width = rectangle.x;
div.style.height = rectangle.y;
div.style.backgroundColor = rectangle.color;
div.style.borderRadius = rectangle.borderRadius;
div.innerText = rectangle.content;

document.body.insertBefore(div, document.getElementsByTagName('script')[0]);

var objArr = [
  {

  },
  {

  },
];

