
// 💡 **Question 8**

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// *Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

// **Example 1:**

// **Input:** nums = [2,5,1,3,4,7], n = 3

// **Output:** [2,3,5,4,1,7]
// // **Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// To rearrange the array nums consisting of 2n elements in the form [x1, x2, ..., xn, y1, y2, ..., yn] to the form [x1, y1, x2, y2, ..., xn, yn], you can use the following JavaScript code:
// function shuffle(nums, n) {
//   const result = [];
  
//   for (let i = 0; i < n; i++) {
//     result.push(nums[i], nums[i + n]); // Add xi and yi to the result array
//   }
  
//   return result;
// }
// // Test the function
// const nums = [2, 5, 1, 3, 4, 7];
// const n = 3;
// console.log(shuffle(nums, n)); // Output: [2, 3, 5, 4, 1, 7]
// The shuffle function takes the input array nums and the value of n. It initializes an empty result array to store the rearranged elements.
// Next, it uses a for loop to iterate n times. In each iteration, it adds the i-th element from the first half of the array (nums[i]) and the corresponding i-th element from the second half of the array (nums[i + n]) to the result array. This ensures that the elements are rearranged in the desired order.
// Finally, the function returns the result array, which contains the elements of nums rearranged in the form [x1, y1, x2, y2, ..., xn, yn].




