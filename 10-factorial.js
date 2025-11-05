function factorial(n) {
    // Handle NaN or no argument
    if (isNaN(n)) {
        return 1;
    }

    // Convert to integer
    n = parseInt(n);

    // Base case: factorial of 0 or 1 is 1
    if (n <= 1) {
        return 1;
    }

    // Recursive case: n * factorial(n-1)
    return n * factorial(n - 1);
}

// Get the argument from command line
const arg = process.argv[2];
const result = factorial(arg);
console.log(result);