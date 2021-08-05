let arr1 = [1,3,5,6,7,9,33,66,22,65,88];
let arr2 = [2,5,7,1,6,9,77,65,88,94,22,54];
let arr3=[];
const map = new Map();

arr2.forEach(function(item, index){ map.set(index, item); });

arr1.forEach(function(item, index){
    if(map.has(item)){
        arr3.push(map.get(item));            
    }
})

console.log(arr3);