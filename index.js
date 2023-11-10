// Friday: Fibonacci Sequence
// A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.

// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...

// Immediately you find the pattern: setting the first two terms to be 1,
// any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13
// and so on.

// In this way, if n would be equal to 4 your result should be 3;
// but if n is 7, then the result is 13.

// But these are small numbers, which can be computed by hand.
// What about bigger numbers? Let's see what results you will get for the following n's:

// n = 43 -> x
// n = 101 -> x
// n = 227 -> x
// n = 491 -> x
// n = 881 -> x

//Pseudocode
// 1. Create a function with number n as parameter;
// 2. Check if n is less than or equal to 2 and return 1;
// 3. Initialize two variables, fibPrev and fibCurrent, both set to 1;
// 4. Use for loop to iterate via range of numbers;
// 5. In each iteration, calculate the next Fibonacci number;
// 6. Update fibPrev to be the current value of fibCurrent,
// and fibCurrent to be the current value of fibNext.
// 7. Returns the value of fibCurrent from the function;
// 8. Call the function with necessary argument inside console.log.

function fibonacciIterative(n) {
  if (n <= 2) {
    return 1;
  }

  let fibPrev = 1;
  let fibCurrent = 1;

  for (let i = 3; i <= n; i++) {
    let fibNext = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = fibNext;
  }

  return fibCurrent;
}

console.log(fibonacciIterative(4));
console.log(fibonacciIterative(7));
console.log(fibonacciIterative(43));
