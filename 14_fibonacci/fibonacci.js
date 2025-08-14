const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number == 0) return 0;
    if (number == 1 || number == 2) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
};

// function fibonacciIterative(n) {
//   // Handle base cases for n = 0 and n = 1
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   }

//   // Initialize the first two Fibonacci numbers
//   let a = 0;
//   let b = 1;

//   // Loop from the third number up to n
//   for (let i = 2; i <= n; i++) {
//     let temp = a + b; // Calculate the next Fibonacci number
//     a = b;           // Update 'a' to the previous 'b'
//     b = temp;        // Update 'b' to the newly calculated number
//   }

//   return b; // Return the nth Fibonacci number
// }

// Do not edit below this line
module.exports = fibonacci;
