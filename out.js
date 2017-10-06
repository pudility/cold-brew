
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
Math.eval = require('mathjs').eval;
const chalk = require(__dirname + '/modules/chalk');

console.color = chalk;
const { spawn } = require('threads');

const interpriter = (func) => {
  process.child = spawn(func);
}

process.child = (func) => {
  interpriter(func)
}


Math.tools = require('mathjs');
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
Array.prototype.findIndex = function(id, search) {
  for (var i = 0; i < this.length; i++) {
    if (this[i][id] === search) {
      return i;
    };
  }
}

function red(_callback) {
  if (_callback) _callback();
}

red(() => {
  console.log('blue');
});

red();