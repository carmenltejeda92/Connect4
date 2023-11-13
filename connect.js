/*  Author: Carmen Tejeda
    Date: 11/07/2023
    Purpose: Creating a connect 4 game for two players.  */

// const body = document.querySelector('#body')
const section = document.querySelector('#playerOne')
const aside = document.querySelector('#playerTwo')
const footer = document.querySelector('.bottomButtons')
const newGame = document.querySelector('#newGame')
const endGame = document.querySelector('#endGame')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')


let gameOver = true
const player1 = document.createElement('div')
let player2
let p1
let p2


// Event Listeners
newGame.addEventListener('click', () =>{
    p1 == true && p2 == false
    input1.value = ' '
    console.log(player1)
})

endGame.addEventListener('click', () =>{
    location.reload()
})

const gameScreen = document.querySelectorAll('.box')
console.log(gameScreen)

let currentShape = 'redChip'
let currentPlayer = p1

gameScreen.forEach(box=>{
    box.addEventListener('click', (e)=>{
        // box.appendChild(shape)
        let shape = document.createElement('div')
        if(box.getElementsByTagName('div').length){
            return
        }else{
            if(currentShape === 'redChip'){
                shape.setAttribute('class', 'redChip')
                box.appendChild(shape)
                currentShape = 'yellowChip'
                currentPlayer = p2
            }else if(currentShape === 'yellowChip'){
                shape.setAttribute('class', 'yellowChip')
                box.appendChild(shape)
                currentShape = 'redChip'
                currentPlayer = p1
            }
        }
        
    checkWinner()

    })

    
})



function checkWinner(){
let check =[]

for(let i=0; i<5; i++){
        check.push([])
        for(let c=0; c<5; c++){
            let elements = document.querySelectorAll('.box')
            check[i].push(elements)
        }
    }


let counter = 0
let score = 0
for(let i=0; i<check.length; i++){
    if(currentShape === 'redChip') counter++
    if(counter ===4){
        console.log("You win the match!")
        score++
    }
    if(score > 2)       console.log('You win the game!')
}




}

//function checkWinner() - check which player, then check if this player has four shapes in a row or a column by checking it's class name 
// and increase score in the same checkWinner() function - if the score === 2, then player wins the game 



