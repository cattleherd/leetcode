/**
 * @param {string} s
 * @return {string}
 * similar to the reverse vowels, so use two pointer
 */
var reverseWords = function (s) {
  let words = s.trim().split(/\s+/); //split using any number of spaces as delimiter, also deleting leading and trailing spaces
  let leftPointer = 0;
  let rightPointer = words.length - 1;

  while (leftPointer < rightPointer) {
    temp = words[rightPointer];
    words[rightPointer] = words[leftPointer];
    words[leftPointer] = temp;
    rightPointer--;
    leftPointer++;
  }
  return words.join(" ");
};

console.log(reverseWords("a good   example"));
