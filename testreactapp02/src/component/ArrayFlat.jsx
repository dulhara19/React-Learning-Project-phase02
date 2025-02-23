// //The flat method in JavaScript is used to create a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// //Syntax
// arr.flat([depth])

// depth (optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

// const arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat());
// // Output: [1, 2, 3, 4]

// const arr2 = [1, 2, [3, 4, [5, 6]]];
// console.log(arr2.flat(1));
// // Output: [1, 2, 3, 4, [5, 6]]

// console.log(arr2.flat(2));
// // Output: [1, 2, 3, 4, 5, 6]

// Explanation
// Default Depth: By default, flat flattens the array by one level.
// Custom Depth: You can specify the depth to which the array should be flattened. For example, flat(2) flattens the array up to two levels deep.
// Infinite Depth: Using Infinity as the depth parameter will flatten the array completely, regardless of how deeply nested it is.
// Usage
// The flat method is useful when you need to flatten nested arrays, especially when dealing with multi-dimensional arrays or arrays with varying levels of nesting.
