function getConcatenation(nums: number[]): number[]{

let nums2: number[] = nums;

nums2.push(...nums);

return nums2;

}

console.log(getConcatenation([1,2,3,4,5]));

/* This solution is slightly  more efficient, since it allocates
the length of the new array ahead of time. My implementation relies
on javascript engine push algorithm in allocating memory, and resizing the
reference of the nums array.

function getConcatenation(nums: number[]): number[] {
    const len = nums.length;
    const ans = new Array(2 * len);
  
    for (let i = 0; i < len; i++) {
        ans[i] = nums[i];
        ans[i + len] = nums[i];
    }
  
    return ans;
};


*/