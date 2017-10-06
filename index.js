#!/usr/bin/env node

const fs = require('fs');
const babel = require('babel-core');
const { fork } = require('child_process');
const _ = require('underscore');

let obj;
let code = "";
let x = 0;
let i;

if (process.argv[2] === "--script" && process.argv[3]) {
  obj = JSON.parse(fs.readFileSync('./chill.json', 'utf8'));
  obj.run.push(process.argv[3])
  process.argv[2] = false;
}else{
  obj = JSON.parse(fs.readFileSync(process.argv[2] || './chill.json', 'utf8'));
}

const add_scripts = (callback) => {
  _.each(obj.scripts, function (val, i) {
    const path = __dirname + '/' + val;

    fs.readFile(path, function(err, data) {
      if (err) throw err;

      let src = data.toString();

      code += "\n"
      code += src;

      if (i+1 === obj.scripts.length) {
        return callback()
      }
    })
  });
}

const appy_babel = (callback) => {
  _.each(obj.run, function (val, i) {
    const path = process.cwd() + '/' + val;

    fs.readFile(path, function(err, data) {
      if (err) throw err;

      // convert from a buffer to a string
      let src = data.toString();

      // use our plugin to transform the source
      const out = babel.transform(src, {
        plugins: [
          require(obj.babel[0])
        ],
      });
      code += "\n"
      code += out.code

      if (i+1 === obj.run.length) {
        return callback()
      }
    });
  });
}

const create_out = (callback) => {
  fs.writeFile(__dirname + '/' + obj.out, code, function (err) {
    if (err) return console.log(err);

    fork(__dirname + "/" + obj.out)

    if (callback) {
      callback()
    }
  });
}

add_scripts(() => {
  appy_babel(() => {
    create_out ()
  })
})