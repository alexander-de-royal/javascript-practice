// const add = (x,y) => x + y;
module.exports.add = (x,y) => x + y;

// const PI = 3.14;
module.exports.PI = 3.14;

// const square = x => x * x;
module.exports.square = x => x * x;

exports.square = square;
exports.PI = PI;

const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;



