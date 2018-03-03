function groupAnimals(animals) {
  var result=[];
  var arr=[];
  for(var i=0;i<animals.length;i++){
    let exists=false;
    for(var j=0;j<arr.length;j++){
      if(animals[i][0] ===arr[j][0]){
        exists = true;
      }
    }
    if(!exists){
      arr.push(animals[i][0]);
    }
  }
  arr.sort();
  for(var k=0; k<arr.length; k++){
    result.push([]);
    for(var l=0; l<animals.length; l++){
      if(arr[k]===animals[l][0]){
        result[k].push(animals[l]);
      }
    }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]

