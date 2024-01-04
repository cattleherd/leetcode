/* This is O(n^2) since outer loop is O(n), but when i counter reaches the end
x counter increases by 1, and i starts from x++ until it reaches the end. 

i counter = O(n)
x counter = O(n)

= O(n*n) = O(n^2)

*/


function twoSum(nums: number[], target: number) {
    let x: number = 0;
    let i: number = 1;
    while((nums[i] + nums[x])!== target && x<=nums.length-1){
        if(i == nums.length-1){
            x++;
            i=x;
        }
        i++;
    }
    console.log(nums[x] + nums[i]);
};

twoSum([1,2,3,4],9);