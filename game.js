// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")
const button = document.getElementById("buttons")
const timer = document.getElementById("timer")
let score = 0
let time = 20
let timeLimit = setInterval(()=>{
    timer.innerText = time
    time--
    if (time<0){
        endGame()
    }
},1000)

RandomNumbers()

button.addEventListener("click",(e)=>{``
    CheckOperators(e.target.id)
})

function RandomNumbers(){
    num1 = Math.floor(Math.random()*101)
    num2 = Math.floor(Math.random()*101)
    number1.innerText = num1
    number2.innerText = num2
    arr = [num1+num2,num1*num2,(num1/num2).toFixed(1),num1-num2,num1%num2]
    num3 = arr[Math.floor(Math.random()*5)]
    number3.innerText = num3
}

function CheckOperators(id){
    const index = {plus:0, minus:3, mul:1, divide:2, modulus:4}
    if (arr[index[id]]==num3){
        time = 20
        RandomNumbers()
        score++
        console.log(score)
    }
    else{
        endGame()
    }
}

function endGame(){
    localStorage.setItem("score",score)
    clearInterval(timeLimit)
    window.open("gameover.html","_self")
}
