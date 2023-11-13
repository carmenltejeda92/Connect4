/*  Author: Carmen Tejeda
    Date: 11/07/2023
    Purpose: Creating a connect 4 game for two players.  */

// const body = document.querySelector('#body')
const section = document.querySelector('#playerOne')
const aside = document.querySelector('#playerTwo')
const footer = document.querySelector('.bottomButtons')
const endGame = document.querySelector('#endGame')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')


let gameOver = true
const player1 = document.createElement('div')
let player2
let p1
let p2

section.innerHTML = "Player 1"
section.appendChild(input1)
submit.innerText = 'Submit'
section.appendChild(submit)

aside.innerHTML = "Player 2"
input2.style.width = '75px'
aside.appendChild(input2)
submit2.innerText = 'Submit'
aside.appendChild(submit2)


// Event Listeners
endGame.addEventListener('click', () =>{
    location.reload()
})

submit.addEventListener('click', () =>{
    if(input1.value == 'red') player1.classList.add('.redChip') //redChip
    // else if (input1.value == 'yellow') player1 = yellowChip
    p1 == true && p2 == false
    input1.value = ' '
    console.log(player1)
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

            checkWinner()
        }
        
    })
})







