function isPalindrome(string) {
  let reverseString = string.split('').reverse().join('');
  if (reverseString === string){
      return true;
  }else {
      return false;
  }
}


//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
