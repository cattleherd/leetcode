//approach is to keep building an array until a repeated char is found,
//then remove elements from the left of array until repeated character is removed
//[abcdecghi] => [bcdeghi] => [cdeghi] => [deghi] longest subarray
//value tracks the longest subarray thus far 


let value: number = 0; //holds the length of longest subarray
let arr: String[] = new Array; //this array contains longest substring

function lengthOfLongestSubstring(s: string): number {

for(let i = 0; i < s.length; i++){
    while(arr.includes(s[i])){ //remove elements from beginning of array until repeated char is removed
        arr.shift();
    }
    arr.push(s[i])//only push the element in the current index if its not already contained in subarr
    if(arr.length > value){// keep track of largest length
        value = arr.length;
    }

   
} 
return value;

};

console.log(lengthOfLongestSubstring("pwwkew"));
