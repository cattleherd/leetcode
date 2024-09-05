/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */


/*Man this was a doozy, basically you had to check if left and right of index had a 0 or undefined (for edges)
If it fufilled this, then you can plant a tree, and mark that index as planted since you cannot count it twice

I did peek for like 1min the solution, which gave me a tip to modify the array when you plant a tree.

This beats 83% of submissions tho, so im happy :)
*/

var canPlaceFlowers = function(flowerbed, n) {
    let allowed = 0;
    for(let i = 0; i < flowerbed.length; i ++ ){
        if((flowerbed[i-1] === 0 || flowerbed[i-1] === undefined) && (flowerbed[i+1] === 0 || flowerbed[i+1] === undefined) && flowerbed[i] === 0){
            allowed+=1;
            console.log('added 1 at index: ' + i);
            flowerbed[i] = 1;
        }
    }
    console.log(flowerbed);
    return allowed>=n;
};

console.log(canPlaceFlowers([0,0,0,1,0,0],2));