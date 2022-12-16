//Big O practice

// Big(O) ----  Constant Time O(1)
function constantTime(n) {
    console.log( 1+n+n );
}
constantTime(10);

// Big(O) ----- Linear Time O(n)
function linearTime(n) {
    for(let i = 0; i < n;i++){
        console.log(i);
    }
}
linearTime(11);


// Big(O) ------ Logarithmic Time O(logn)



// Big(O) ------ Quadratic Time O(n^2)
function quadtratieTime(n) {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j);
        }
    }
}
quadtratieTime(4);

// Big(O) ------ Cubic Time O(n^3)
function cubicTime(n) {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                console.log(i, j);
            }
        }
    }
}
cubicTime(3);


// Big(O) ------- Logarithmic Time O(logn)

function logarithmicTime(n) {

}
logarithmicTime(5);

// Best and Worst Case, O(n)
function maxFinder(n) {
    for(let i = 0; i < Math.max(5, n); i++){
        console.log(i);//depends on input
    }
    
}
maxFinder(4);// O(1)
maxFinder(6);// O(n)

function minFinder(n) {
    for(let i = 0; i < Math.min(5, n); i++){
        console.log(i);//depends on input
    }
}
minFinder(4);//O(1)
minFinder(6);//O(n)


// Big(O) ------------ O(m+n)
function bigMPlusN(m, n) {
    for(let i = 0; i < m;i++){
        console.log(i);
    }

    for(let i = 0; i < n;i++){
        console.log(i);
    }
}
bigMPlusN(3,4);




// Array
const myArray = [1,2,3,4,5,6];
console.log(myArray.length);
myArray.push(7);// O(1) // insert an item at last index
console.log(myArray);
myArray.pop();//O(1) // remove an item from last index
console.log(myArray);
myArray.shift(1); // O(n) // insert an item at from 1st index
console.log(myArray);
myArray.unshift(1);// O(n)  // remove an item from 1st index
console.log(myArray);


const newArr = ["BMW", "Volvo", "Mini"];
for(let elm in newArr){
    console.log(newArr[elm]);// O(n)
}

for(let elm in newArr){
    console.log(newArr[elm]);// O(n)
}

const obj = {
    name:'azad',
    age:25
}
console.log(obj);
for(let n in obj){
    console.log(n);// O(n)
    
}
console.log(obj.name);// O(1)
obj.profession = 'Software Engineer';
console.log(obj);
console.log('age' in obj);// O(1)
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
