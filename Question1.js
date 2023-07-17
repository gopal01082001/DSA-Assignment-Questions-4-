
// 💡 **Question 1**
// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.
// **Example 1:**
// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// Output: [1,5]
// **Explanation:** Only 1 and 5 appeared in the three arrays.
// function findCommonElements(arr1, arr2, arr3) {
//     let result = [];
//     let i = 0, j = 0, k = 0;
    
//     // Iterate until one of the arrays reaches its end
//     while (i < arr1.length && j < arr2.length && k < arr3.length) {
//       // If the current elements in all three arrays are equal
//       if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
//         result.push(arr1[i]); // Add the element to the result array
//         i++;
//         j++;
//         k++;
//       }
//       // If the current element in arr1 is smaller, move to the next element in arr1
//       else if (arr1[i] < arr2[j]) {
//         i++;
//       }
//       // If the current element in arr2 is smaller, move to the next element in arr2
//       else if (arr2[j] < arr3[k]) {
//         j++;
//       }
//       // If the current element in arr3 is smaller, move to the next element in arr3
//       else {
//         k++;
//       }
//     }
    
//     return result;
//   }
  
//   // Test the function
//   const arr1 = [1, 2, 3, 4, 5];
//   const arr2 = [1, 2, 5, 7, 9];
//   const arr3 = [1, 3, 4, 5, 8];
  
//   console.log(findCommonElements(arr1, arr2, arr3)); // Output: [1, 5]
  