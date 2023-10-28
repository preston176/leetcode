function isPalindrome(x) {
    // If x is negative or ends with 0 (excluding 0 itself), it's not a palindrome
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;

    // Reverse the second half of the number
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // For even-length palindromes, reversed will be exactly half of original
    // For odd-length palindromes, reversed will be one digit short
    // In either case, the middle digit can be ignored
    return original === reversed || original === Math.floor(reversed / 10);
}

// Example usage:
console.log(isPalindrome(121));    // Output: true
console.log(isPalindrome(-121));   // Output: false
console.log(isPalindrome(10));     // Output: false