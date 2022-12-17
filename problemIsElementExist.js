// write a funciton that return true/false if and item of an array is exist in another array 

// Big O(n^2)
function isElementExist(array1, array2){

    // loop throug first arraay and check in second array
    let exist = false;
    for(let elm of array1){
        if(array2.includes(elm)){
            exist = true;
            break;
        }else{
            exist = false;
        }
    }
    return exist;

}
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 'b'];
console.log(isElementExist(array1, array2));


// 2nd way
// Big O(n)
function isElementExistAlter(array3, array4){

    // loop throug first arraay and check in second array
   // Flag variable 
    const frequencyCounter = {};

    for(let elm of array3){
        frequencyCounter[elm] = true
    }
    
    let exist = false;
    for(let elm of array4){
        if(elm in frequencyCounter){
            exist = true;
        }else{
            exist = false;
        }
    }
    return exist
    console.log(frequencyCounter);

}
const array3 = ['a', 'b', 'c'];
const array4 = [1, 2, 'a'];
console.log(isElementExistAlter(array3, array4));