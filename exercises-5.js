/*--------------
PALINDROME KATA
--------------*/

function palindrome(kata){
  let kata1='';
  let kata2='';
  let result;
  let ceilKata=Math.ceil(kata.length/2);
  for(let i=0; i<ceilKata;i++){
    kata1=kata1+kata[i];
  }
  for(let i=kata.length-1; i>=ceilKata-1;i--){
    kata2=kata2+kata[i];
  }
  if(kata1 === kata2){
    result = true;
  }else{
    result = false;
  }
  return result;
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false*/
