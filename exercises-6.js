function angkaPalindrome(num) {
  let result;
  if(num<10){
    result = num += 1;
  }else{
    while(num>9){
      num++;
      let strnum=String(num);
      if(strnum === strnum.split('').reverse().join('')){
        result = Number(strnum);
        return result
      }
    }

  }
  return result;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
