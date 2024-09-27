/* 
*This solution is too slow...look below for more optimized version
*Reasons why this is slow is 

1. using replace() creates a new string for every vowel. This can get expensive.
2. iterating through the string twice, once to find the vowel, the second to replace.
   is there a way to do it in a single pass, from both ends?
3. using includes() for each character check can be expensive, especially for long strings
4. Can you use pointers or indeces instead of array operations like includes() and replace()

let vowels = ['a','e','i','o','u'];
let vowelsFromString = [];

var reverseVowels = function(s) {
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i].toLowerCase())){
            vowelsFromString.push(s[i]);
            s=s.replace(s[i],'*');
        }

    }
    vowelsFromString.reverse();
    for(let i = 0; i < vowelsFromString.length; i++){
        s=s.replace('*',vowelsFromString[i]);
    }
    return s;
};

*/

/**
 * @param {string} 
 * @return {string}
 * 
 * This utilizes two pointers, such that worst case is O(n)
 */

let vowels = ["a", "e", "i", "o", "u"];
let vowelsFromString = [];
let leftPointer;
let rightPointer;

var reverseVowels = function (s) {
  let word = s.split("");
  leftPointer = 0;
  rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    while ((leftPointer < rightPointer) && !vowels.includes(word[leftPointer].toLowerCase())) {
      leftPointer++;
    }
    while (
      (rightPointer > leftPointer) && !vowels.includes(word[rightPointer].toLowerCase())) {
      rightPointer--;
    }
    if(leftPointer < rightPointer){
      [word[leftPointer], word[rightPointer]] = [word[rightPointer], word[leftPointer]];
      leftPointer++;
      rightPointer--
    }
    
  }
  return word.join("");
};

console.log(reverseVowels("leetcode"));
