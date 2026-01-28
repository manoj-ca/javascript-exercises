const permutations = function(nums) {
    const result = [];

    // Base case: if the array has 1 or fewer elements, it is its own only permutation
    if (nums.length <= 1) return [nums];

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        // Get the remaining elements in the array excluding the current element
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        // Recursively get permutations of the remaining elements
        const remainingNumsPermuted = permutations(remainingNums);

        // Combine the current number with each of the remaining permutations
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;  
};
  
// Do not edit below this line
module.exports = permutations;
