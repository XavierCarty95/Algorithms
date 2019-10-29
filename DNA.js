function pairElement(str) {

 var newArray = []
 var  pairC = ["G" , "C"]
 var  pairG = ["C", "G"]
 var pairT  = ["A", "T"]
 var pairA  = ["T" , "A"]
 
 for(var i = 0; i < str.length; i++){
    if(str[i] === "G"){
      newArray.push(pairC)
    }
    else if(str[i] === "C"){
      newArray.push(pairG)
    }
    else if(str[i] === "A"){
      newArray.push(pairT)

    }
    else {
      newArray.push(pairA)
    }
      
    }
    
 
 return newArray
  
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"))
