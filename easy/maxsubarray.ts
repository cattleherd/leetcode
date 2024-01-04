/*[-2,1,-3,4,-1,2,1,-5,4] 
    
    This beginner friendly approach involves comparing the previous index in the array
    
    1)  if the value at previous index is greater than 0, then it gets added to the 
        current index. This essentially creates an accumulator of the largest subarray at
        each index. However since the largest subarray will not be ordered, For example
        since i=3 to i=6 is [4,-1,2,1] is 6 which is > 0, the next index will be total of 
        subarray from i=3 to i=7, since i=6 is 6 (greater than 0). so i at 6 = 6, i at 7 = 1
        Thus, you will need to order this modified array and select the first element (largest)
    */


function maxSubArray(nums: number[]): number {
    for( let i = 1; i < nums.length; i++){
        if(nums[i-1] >= 0){
            nums[i]+=nums[i-1];
        }

        nums.sort((a,b)=>b-a);
    }
    return nums[0];

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));