
Array.prototype.remove = function() {
    let what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
const { spawn } = require('threads');

const interpriter = (func) => {
  process.child = spawn(func);
}

process.child = (func) => {
  interpriter(func)
}


const chalk = require(__dirname + '/modules/chalk');

console.color = chalk;
Math.eval = require('mathjs').eval;
Math.tools = require('mathjs');
Array.prototype.findIndex = function(id, search) {
  for (var i = 0; i < this.length; i++) {
    if (this[i][id] === search) {
      return i;
    };
  }
}

const Enum = (input, object) => {
  let index;

  input_array = Object.keys(input)
  array = Object.keys(object);

  input_array.map((data, i) => {
    index = array.indexOf(data);

    if (index > -1) {
      object[data](input[data])
    }
  })
}
// functions and constants
console.log(Math.tools.round(Math.tools.e, 3)); // 2.718

// expressions
console.log(Math.tools.eval('12 / (2.3 + 0.7)')); // 4
console.log(Math.eval('12 / (2.3 + 0.7)')); // 4


// chaining
console.log(Math.tools.chain(3).add(4).multiply(2).done()); // 14
console.color.bold.red('test3');

console.color.blue('blue');

chalk.blue('Hello') + 'World' + chalk.red('!');
process.child(function (input, done) {
  // Everything we do here will be run in parallel in another execution context.
  // Remember that this function will be executed in the thread's context,
  // so you cannot reference any value of the surrounding code.
  done({ string: input.string, integer: parseInt(input.string) });
});

process.child.send({ string: '123' })
// The handlers come here: (none of them is mandatory)
.on('message', function (response) {
  console.log('123 * 2 = ', response.integer * 2);
  process.child.kill();
}).on('error', function (error) {
  console.error('Worker errored:', error);
}).on('exit', function () {
  console.log('Worker has been terminated.');
});
function red(_callback) {
  _callback();
}

red(() => {
  console.log('hi');
});
let obj = {
  one: 1,
  two: 2,
  three: 3,
  cat: "dog",
  foo: {
    bar: 'Today: ',
    date: new Date(),
    number: 123
  }
};

Enum(obj, {
  one: val => {
    console.log(val);
  },
  two: val => {
    console.log(val);
  },
  three: val => {
    console.log(val);
  },
  four: val => {
    console.log(val);
  },
  cat: () => {
    console.log('meow');
  },
  foo: val => {
    console.log(val.bar + val.date);
    if (val.number === 123) {
      console.log(`your number is ${val.number}`);
    }
  }
});