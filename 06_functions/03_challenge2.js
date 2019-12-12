// function that returns the average value in an array of numbers
function avgArray(arr){
  let total = 0;
  // loop of each num
  for(let num of arr){
    // add them to total
    total += num;
  }
  // divide number by array length
  return total/arr.length;
}

const nums = [75,76,80,95,100];
console.log(avgArray(nums));
console.log(avgArray([0,50]));
