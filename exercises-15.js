function groupAnimals(animals) {
  var a=[]; var c=[]; var k=[]; var u=[]; var result=[];
  animals.sort();
  for(var i=0;i<animals.length;i++){
    if(animals[i][0] === 'a'){
      a.push(animals[i]);
    }else if(animals[i][0] === 'c'){
      c.push(animals[i]);
    }else if(animals[i][0] === 'k'){
      k.push(animals[i]);
    }else if(animals[i][0] === 'u'){
      u.push(animals[i]);
    }
  }
  result.push(a, c, k, u);
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
