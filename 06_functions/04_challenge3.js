// Write a function that determines if a string is a Pangram

const isPangram = (sentence) =>{
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerCase = sentence.toLowerCase();
  for(let char of alphabet){
    if(lowerCase.indexOf(char) === -1){
      return false;
    }
  }
  return true;
}

console.log(isPangram('The five boxing wizards jump quickly'));

console.log(isPangram('The five boxing wizards jump quick'));

