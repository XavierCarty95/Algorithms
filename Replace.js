function myReplace(str, before, after) {
  
  if(before[0] === before[0].toUpperCase()){
  var affy = after.charAt(0).toUpperCase() + after.slice(1) 
  var str = str.replace(before,affy);
  return str
  }

  return str.replace(before , after)
}

myReplace(A quick brown fox jumped over the lazy dog, jumped, leaped);
