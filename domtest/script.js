console.log("Connected successfully.");

const divMain = document.querySelector(".test1");
const divSec = document.querySelector(".test2");
let random = getRandomInt(2)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function setThemeOne() {
    divMain.style.cssText = "background-color: black; color: white; text-align: center";
    divSec.style.cssText = "background-color: gray; color: white; text-align: left; font-weight: bold;";
} 
function setThemeTwo() {
    divMain.style.cssText = "background-color: red; color: white; text-align: right; font-weight: bold;";
    divSec.style.cssText = "background-color: white; color: black; text-align: center; font-weight: bold;";
}

let num = (random == 1) ?
    () => setThemeOne() :
    () => setThemeTwo();

num();
console.log(random);

    
