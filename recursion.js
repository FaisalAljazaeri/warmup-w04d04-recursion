// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion
function findMax(arr, i, max = -Infinity) {
    // This function returns the largest number in a given array.
    if (i === arr.length) {
        return max;
    }

    if (arr[i] > max) {
        return findMax(arr, i + 1, arr[i]);
    } else {
        return findMax(arr, i + 1, max);
    }
}
findMax([1, 44, 3, 11, 20, 100, 19, 39, -1, -3], 0);

function factorial(n) {
    // This function returns the factorial of a given number.
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}
factorial(5);

function fibonacci(n, i = 1, t = 0) {
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1

    if (t === n) {
        return 1;
    }

    return i + fibonacci(i + 1, t = t + 1);
}
fibonacci(4); // 1,1,2,3,5,8,13

function coinFlips() {
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations() {
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}
