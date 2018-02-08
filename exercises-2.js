function balikString(kata){
  var balik = '';
  for( var i = kata.length-1; i>=0; i--){
    balik = balik+kata[i];
  }
  return balik;
}

console.log(balikString('hello world!'));
