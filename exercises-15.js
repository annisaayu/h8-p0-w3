function groupAnimals(animals) {
  var a=[]; var c=[]; var k=[]; var u=[]; var result=[];
  var result=[];
  for(var i=0;i<animals.length;i++){
    switch (animals[i][0]) {
      case 'a':
        a.push(animals[i]);
        break;
      case 'c':
        c.push(animals[i]);
        break;
      case 'k':
        k.push(animals[i]);
        break;
      case 'u':
        u.push(animals[i]);
        break;
    }
  }
  if(u.length === 0){
    result.push(a,c,k);
  }else {
      result.push(a,c,k,u);
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda','kancil'], ['unta'] ]
