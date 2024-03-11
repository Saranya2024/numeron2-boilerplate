const number1=document.getElementById("number1")
const number2=document.getElementById("number2")
const button = document.getElementById("buttons")
const timer=document.getElementById("timer")

// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
function getRandomNumbers () {
    return Math.floor(Math.random()*100)+1
}

// Iteration 3: Creating variables required to make the game functional
let time=21
let score=0
let operation;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3=document.getElementById("number3")

// Creating a function to update the answer"
function updateAnswer(num1,num2)  {
    let answer=0
    let Operators=["+","-","*","/","%"]
    operation = Operators[Math.floor(Math.random()*5)]     
    if (operation === "+") {
        answer = num1 + num2;
    } else if (operation === "-") {
        answer = num1 - num2;
    } else if (operation === "*") {
        answer = num1 * num2;
    } else if (operation === "/") {
        answer = Math.round(num1 / num2);
    } else if (operation === "%") {
        answer = num1 % num2;
    }
    return answer
}

// Iteration 5: Creating a randomise function to make the game functional
function displayrandomNumbers() {
    var num1=getRandomNumbers()
    var num2=getRandomNumbers()
    var num3=updateAnswer(num1,num2)
    
    number1.innerText=num1
    number2.innerText=num2
    number3.innerText=num3    
}

displayrandomNumbers();

// Iteration 6: Making the Operators (button) functional
button.addEventListener("click",(e)=>{
    compareNumbers(e.target.id)
})


//Comparing two numbers:
function compareNumbers(target_id){
    if (target_id=="plus" && operation=="+" ||  target_id=="minus" && operation=="-" || target_id=="mul" && operation=="*" || target_id=="divide" && operation=="/" || target_id=="modulus" && operation=="%") {
        time=21
        timer.innerText=time
        score++
        displayrandomNumbers()
    }
    else {       
        gameover()
    }
}


//Game Over Function:
function gameover() {
    localStorage.setItem("score", score)
    location.href = "gameover.html"
}

// Iteration 7: Making Timer functional
setInterval(setTimer,1000)
function setTimer(){
   time--
   timer.innerText=time
   if (time==0){
       gameover() 
   }
}
