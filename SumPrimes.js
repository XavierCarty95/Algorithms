function sumPrimes(num) {
 let array = []
  for(var i = 2; i <= num; i++){
    for(var j = 2; j <= i; j++){
       if(i === j){
         array.push(i)
       }
       if(i % j === 0){
         break;
       }
    }
    
  }
  var hello = array.reduce((x , y) => {
    return x + y; 
  })
  return hello
 
}

sumPrimes(10);
