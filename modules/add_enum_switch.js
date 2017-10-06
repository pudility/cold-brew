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