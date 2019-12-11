function isPangram(sentence){
  for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(sentence.indexOf(char)=== -1){
      return false;
    }
  }
  return true;
}