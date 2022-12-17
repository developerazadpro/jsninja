// Write a function which takes in a string and return counts of each character in the string

// Big O(n) time complexity
function countCharacter(inputStr){
    // creting an hashMap object
    const hashMap = {};

    // looping of normalize string
    const normalizeString = inputStr.toLowerCase();//console.log(normalizeString);
    for(let i = 0; i < normalizeString.length; i++){
        const char = normalizeString[i]; //console.log(char);

        // string validation
        if(char == ' '){
            continue;
        }

        // way 1
        /*
        if(char in hashMap){
            hashMap[char] = hashMap[char] + 1; console.log(hashMap[char]);
        }else{
            hashMap[char] = 1;
        }
        */

        // way 2
        char in hashMap ? hashMap[char]  = hashMap[char] + 1 : hashMap[char] = 1;

        // way 3
        //hashMap[char] = (hashMap[char] || 0) + 1;

        //console.log(hashMap[char]);
    }
    return hashMap;

    //condition check, if exist in hashMap increase by 1 else set 1
}
console.log(countCharacter('Hello'));