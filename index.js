var rect = require('./rectangle');

function solveRect(l, b) {

  console.log('Solving for Rectangle with l = ' + l + ' and b = ' + b);

  rect(l, b, (err, rectangle) => {

    if (err) {

      console.log('ERROR: ', err.message);

    } else {

      console.log(`Area of rectangle of dimensions l = ${l} and b = ${b} is
        ${rectangle.area()}`);
      console.log(`Perimeter of rectangle of dimensions l = ${l} and b = ${b} is
        ${rectangle.perimeter()}`);
    }
  })

  console.log('This statement is after call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);

// adding a line
