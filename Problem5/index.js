//============================ Question 1====================================================================

function toCase(str) {
    const lowercase = str.toLowerCase();
    const uppercase = str.toUpperCase();
    return `${lowercase}-${uppercase}`;
}

// Example usage:
const inputString = "HelloWorld";
const result = toCase(inputString);
console.log(result); // Output: helloworld-HELLOWORLD

//================================== Question 2===============================================================

function firstChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            return str[i];
        }
    }
    // If no non-space character is found, return null or any other default value
    return null;
}

// Example usage:
const inputStr = "   Hello World";
const result1 = firstChar(inputStr);
console.log(result1); // Output: "H"

// ============================== Question 3=============================================================

function rotateAlphabets(arr) {
    if (arr.length <= 1) {
        
        return arr;
    }
    
    const firstElement = arr.shift();
    arr.push(firstElement); 
    return arr;
}

// Example usage:
const alphabetArray = ['a', 'b', 'c', 'd', 'e'];
const rotatedAlphabets = rotateAlphabets(alphabetArray);
console.log(rotatedAlphabets); // Output: ['b', 'c', 'd', 'e', 'a']
