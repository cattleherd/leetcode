/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let largest = candies[0];
    let boolean = [];
    for(let i = 1; i < candies.length; i++){
        if(candies[i] > largest ){
            largest = candies[i];
        }
    }
    for(let i = 0; i < candies.length; i++){
        if((candies[i]+extraCandies) >= largest){
        boolean.push(true);
        }else{ 
            boolean.push(false);
        }
    }
    return boolean;
};

console.log(kidsWithCandies([2,3,5,1,3],3));

/*best solution uses math.max to find max, then map to do boolean

var kidsWithCandies = function(candies, extraCandies) {
    let max =Math.max(...candies)
    return candies.map( x => x + extraCandies >= max)
};


**/