// Function to find indices of two numbers in the array that add up to the target
function twoSum(nums, target) {
    // Create an empty object to store the indices of numbers
    const numIndices = {};

    // Iterate through the array using a for loop
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement, the number needed to reach the target
        const complement = target - nums[i];

        // Check if the complement is already in the numIndices object
        if (numIndices.hasOwnProperty(complement)) {
            // If found, return the indices of the two numbers
            return [numIndices[complement], i];
        }

        // If complement is not found, store the current number and its index in the object
        numIndices[nums[i]] = i;
    }

    // If no solution is found, return an empty array
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
