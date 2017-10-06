### Cold Brew
A set of helpful JavaScript functions and plugins.

# Usage
## install
~~`$ npm i -g cold-brew-plugin`~~

```bash
npm i cold-brew-plugin
```
(global package in the works)
## config
configure the chill.json file with the script you want to run

```json
"run": [
  "myscript.js" <-- add your script here
],
```

Or you can just run it with the script option:

```bash
chill --script myscript.js
```

## run
you can run your script with the key word `chill` in which case it will look for a `chill.json` script in your current directory, otherwise you can specify a `json` script in the second argument.

### examples:
- Basic usage:
  ```bash
  chill
  ```
- Specify json script:
  ```bash
  chill name.json
  ```
- Run a singular script with default config script
  ```bash
  chill --script name.js
  ```

## chill.json
Here is the default chill.json script:
```json
{
  "babel": [
    "./modules/add_callback.js"

  ],
  "scripts": [
    "./modules/array_remove.js",
    "./modules/add_child.js",
    "./modules/apply_chalk.js",
    "./modules/add_math_eval.js",
    "./modules/add_all_math.js",
    "./modules/indexof_obj.js",
    "./modules/add_enum_switch.js"
  ],
  "run": [
  ],
  "out": "./out.js"
}
```
### Adding scripts
When cold-brew compiles, it combines all the scripts in the `run` array sequentially. Then compiles the whole script. This means that if you define a variable in one script, it will also exist in any scripts after that.

### Modules and Plugins
All of the modules and babel plugins, can be removed at any time. If you would like to add another module or babel plug in, just add it to either the scripts or babel array. Cold-brew reads these arrays sequentially, so if your script depends on other features of cold brew make sure to add it last.

# Features
So far these are the features that cold-brew includes, however new features are being added daily.

## `console.color`
### usage
You can use `console.color` to stylize what you log to the console. `console.color` is based off of [chalk](https://www.npmjs.com/package/chalk), so anything that works for chalk *should* work with this.
### examples
```js
console.color.bold.red('BOLD')

console.color.blue('blue')

chalk.blue('Hello') + 'World' + chalk.red('!')
```
---
## `process.child`
### usage
This spawns a child process using [thread.js](https://github.com/andywer/threads.js)
### example
```js
process.child(function(input, done) {
  done({ string : input.string, integer : parseInt(input.string) });
})

process.child
  .send({ string : '123' })
  .on('message', function(response) {
    console.log('123 * 2 = ', response.integer * 2);
    process.child.kill();
  })
  .on('error', function(error) {
    console.error('Worker errored:', error);
  })
  .on('exit', function() {
    console.log('Worker has been terminated.');
  });
```
---
## callbacks
### usage
You can pass a callback into any function in cold-brew because every function in cold-brew automatically has a callback appended to it and run when the function is created. The callback name is `_callback`.
### example
```js
function red() {}

red(() => {
  console.log('blue');
});

```
---
## `Math.tools`
### usage
`Math.tools` uses the [mathjs library](https://github.com/josdejong/mathjs). For more information on mathjs, please refer to [their docs](https://github.com/josdejong/mathjs/tree/master/docs).
### examples
```js
Math.tools.round(Math.tools.e, 3)

Math.tools.chain(3)
    .add(4)
    .multiply(2)
    .done();
```
---
## `Math.eval`
### usage
`Math.eval` is used to evaluate equations that are strings.
### example
```js
Math.eval('12 / (2.3 + 0.7)')
```
---
## Array manipulation
### `Array.prototype.remove`
#### usage
This removes an element from an array based on its value.
#### example
```js
let arr = ['foo', 'bar', 'baz'];

arr.remove('bar'); //[foo, baz]
```
### `Array.prototype.findIndex`
#### usage
This produces the index of an array based on an object identifier. It takes in two values, the first is the string identifier and the second is the value that you are looking for.
#### example
```js
let arr = [
  {
    hello: 'foo'
  },
  {
    hello: 'baz'
  },
  {
    hello: 'bar'
  }
];

arr.findIndex('hello', 'baz'); //1
```
---
## Enum switch
### usage
`Enum` is used to run a function for all of the elements in an object that you choose. `Enum` takes in two values, an object to sort through and another object that instructs it what to do for every element in the first object.

NOTE: `Enum`, unlike `switch` will run the given function on every element that it runs into, not just the first one.
### example
```js
let obj = {
  one: 1,
  three: 3
}

Enum (obj, {
  one: (val) => {
	   console.log(val)
  },
  two: (val) => {
	   console.log(val)
  },
  three: (val) => {
	   console.log(val)
  },
  four: (val) => {
	   console.log(val)
  }
})

//outputs: 1, 3
```

## tests
For more examples, look through the `tests` folder.

# Contributing
There are no current contributing guidelines.



