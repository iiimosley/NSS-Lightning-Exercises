let nums = [1, 2, 3, 4, "5", 6, "7"]
let nuNums = []
// end result[3, 5, 7, 9, 11, 13]

// nums.forEach(i => {
//     i = Number(i);
//     nuNums.push((i+1)+i);
// });

for (let i = 0; i < nums.length-1; i++) {
    nums[i] = Number(nums[i]);
    nuNums.push(nums[i] + (nums[i] + 1));
    
}

console.log(nuNums);