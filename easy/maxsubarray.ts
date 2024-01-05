/*[-2,1,-3,4,-1,2,1,-5,4] 
    
    This beginner friendly approach involves comparing the previous index in the array
    
    1)  if the value at previous index is greater than 0, then it gets added to the 
        current index. This essentially creates an accumulator of the largest subarray at
        each index. However since the largest subarray will not be ordered, For example
        since i=3 to i=6 is [4,-1,2,1] is 6 which is > 0, the next index will be total of 
        subarray from i=3 to i=7, since i=6 is 6 (greater than 0). so i at 6 = 6, i at 7 = 1
        Thus, you will need to order this modified array and select the first element (largest)
    


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

*/


/*Kadane algorithm, an O(n) method of finding the maximal subarray
    1) You have two accumulators. One calculates the current largest subarray
    the other accumulator calculates the largest subarray in the entire array. largestsubarray starts at
    first index.

    2) the current subarray basically checks whats bigger, arr[i] or currentsubarr + arr[i]
        if the addition of arr[i] and currentsubarray is bigger, then thats the new current
        if the addition of currentsub and arr[i] is smaller than arr[i], a new subarray is 
        started at arr[i]
    
    3) the largest subarray is also evaluated, since its first initialized as the first element
    the first evaluation is to see whether largestsubarr (which is arr[0]) is greater than currentsub, if not then largest sum
    is set to currentsubarray. This ensures the largest subarray is always maintained here

*/ 

function maxSubArray(nums: number[]):number{
    let largestSum = nums[0];
    let currentSum = 0;

    nums.forEach(n =>{
        currentSum = Math.max(n, currentSum+=n )
        largestSum = Math.max(largestSum, currentSum);
    })
        return largestSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

