let x = 123;

// check this number is palindrome or not
function isPalindrome(x) {
    let y = x.toString().split('').reverse().join('');
    return x == y;
}

console.log(isPalindrome(x)); // false