// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let j = 0;
        while(j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j);
    }
    return prefix;
}
let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs)); // "fl"

strs = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs)); // ""