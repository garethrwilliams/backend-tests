function diffToFib(num) {
    // Initialise the starting numbers for Fibonacci's sequence
    let i = 1,
        j = 0;

    // Loop through i and j as a Fibonacci sequence until i exceeds num
    while (i < num) {
        // Increase i by j
        i += j;
        // Set j to be the old value of i
        j = i - j;
    }

    // Return fib number - num
    return i - num;
}