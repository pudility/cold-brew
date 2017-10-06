// functions and constants
console.log(Math.tools.round(Math.tools.e, 3));            // 2.718

// expressions
console.log(Math.tools.eval('12 / (2.3 + 0.7)'));    // 4
console.log(Math.eval('12 / (2.3 + 0.7)'));    // 4


// chaining
console.log(Math.tools.chain(3)
    .add(4)
    .multiply(2)
    .done()); // 14