// value type variable 
// primitives: actual value is stored in memory
let fruit = 'orange';
let color = fruit;
fruit = 'watermelon';


//here nums is a pointer to a place in memory
let nums = [5,6,7,8];
//otherNums is now also pointer to a place in memory
// arrays are reference types
let otherNums = nums;
nums.push(10);
console.log(nums);
console.log(otherNums);

const city = 'Lisbon';
const myEggs = ['brown','brown'];
myEggs.push('white');
console.log(myEggs);