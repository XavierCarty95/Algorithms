function translatePigLatin(str) {
  var regex = /^[^aeiou]+/
  var match = str.match(regex)
  

  if(match !== null) {
   var str =  str.replace(regex,).concat(match)
   .concat(ay) 
   return str
   
   }
   else 
   { 
    var str = str.concat(way);
    return str
   
   }
    
  
}

translatePigLatin(glove);
