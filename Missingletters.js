function fearNotLetter(str) {

  var stringy = abcdefghijklmnopqrstuvwxyz
  let character = str.charAt(0)
  let charcode = stringy.indexOf(str.charAt(0))

  console.log(character)
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== stringy[charcode + i]) {

      return stringy[charcode + i]
    }

  }
  return;
  return str

}


fearNotLetter(abce);

