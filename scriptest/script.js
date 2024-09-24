console.log("hello world :3")

let number = 12
console.log("original number is " + number)
number = number + 5
console.log("now it is " + number + " yippeee")

const NUM = 15
console.log("this number is constant and cannot be changed: " + NUM)

console.log((4 + 6 + 9) / 77)
console.log("the tetration of three: " + 3 ** (3 ** 3))
console.log(0 / 0)

function testFunc(testParam, anotherParam = ", no text input") {
    return testParam + " info added by return" + anotherParam;
}

// function with return
console.log(testFunc("hi", ", text was input :3"));

function testFuncTwo() {
    console.log("function that prints stuff")
}

// function without return
testFuncTwo();

// arrow function
let testFuncThree = (arg) => console.log(arg + 1); 
testFuncThree(2);

//let question = prompt("yes/no", "yes");
//let answer = (question == "yes") ?
//    () => alert("you answered yes") :
//    () => alert("you did not answer yes/answered no");

//answer()

//let overflow = () => overflow();
//overflow();

let add7 = (num) => { return num + 7 }
let multiply = (num1, num2) => {return num1 * num2}
function capitalize(phrase) {
    return phrase[0].toUpperCase() + phrase.slice(1).toLowerCase();
}
console.log(capitalize("pHRASE tEST"));

function lastLetter(word) {
    return word[word.length - 1];
}
console.log(lastLetter("Pneumoultramicroscopicsilicovolcanoconiosis"));

const matrixOne = math.matrix([
    [1, 3, 5],
    [2, 7, 9], 
    [3, 2, 2],
    [2, 2, 3]
]);

const matrixTwo = math.matrix([
    [2, 9, 3, 5],
    [1, 2, 0, 6],
    [5, 3, 5, 0]
]);

console.log("Matrix operation: " + math.multiply(matrixOne, matrixTwo));