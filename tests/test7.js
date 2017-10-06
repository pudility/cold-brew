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
  },
  cat: () => {
    console.log('meow');
  },
  foo: (val) => {
    console.log(val.bar + val.date);
    if (val.number === 123) {
      console.log(`your number is ${val.number}`);
    }
  }
})