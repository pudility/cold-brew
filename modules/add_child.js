const { spawn } = require('threads');

const interpriter = (func) => {
  process.child = spawn(func);
}

process.child = (func) => {
  interpriter(func)
}

