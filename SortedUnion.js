function uniteUnique(arr) {
  let args = [...arguments]
  let newArray = []
  let combined = []

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      newArray.push(args[i][j])
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    if (combined.indexOf(newArray[i]) === -1) {
      combined.push(newArray[i])
    }
  }
  return combined;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
