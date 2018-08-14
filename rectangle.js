module.exports = (x, y, callback) => {

  if (x <= 0 || y <= 0) {

    setTimeout(() =>
      callback(
        new Error('Rectangle dimensions should be greater than 0: x = '
          + x + ', y = ' + y),
        null),
      2000);

  } else {
    setTimeout(() =>
      callback(
        null,
        {
          perimeter() { return 2 * (x + y) },
          area() { return x * y }
        }),
      2000);
  }
};
