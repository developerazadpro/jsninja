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
function maxMinFinder(n) {
    for(let i = 0; i < Math.max(5, n); i++){
        console.log(i);//depends on input
    }
    for(let i = 0; i < Math.min(5, n); i++){
        console.log(i);//depends on input
    }
}
maxMinFinder(4);