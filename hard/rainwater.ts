/**
 */

//first element and last element do not hold water
//for each index, no water held in that position if its greater than lefthighest OR righthighest
//water at index = minbarrier - height at that index

let trap = function(height:number[]):number{
    let water:number = 0;

    for(let pointer = 1; pointer < height.length-1; pointer++){
        let highestright:number = 0 
        let highestleft: number = 0;
        for(let j = pointer;  j>0; j--){//traverse left side
            if(height[j-1] > height[pointer]&& height[j-1]>highestleft){
                highestleft = height[j-1]
            }
        }
        for(let k = pointer;  k < height.length; k++){//traverse right side
            if(height[k+1] > height[pointer] && height[k+1]>highestright){
                highestright = height[k+1]
            }
        }
        //only calculate water if left barrier and right barrier are bigger than current height
        if(highestleft > height[pointer] && highestright > height[pointer]){
            water+=Math.min(highestleft,highestright) - height[pointer];
        }
        

    }
    return water;

};

console.log(trap([4,2,0,3,2,5]));


