/*  Author: Carmen Tejeda
    Date: 11/07/2023
    Purpose: Creating a connect 4 game for two players.  */

// const body = document.querySelector('#body')
// const header = document.querySelector('#connect')
const section = document.querySelector('#playerOne')
const main = document.querySelector('#gameBoard')
const aside = document.querySelector('#playerTwo')
const footer = document.querySelector('.bottomButtons')
const endGame = document.querySelector('#endGame')
const input1 = document.createElement('input')
const input2 = document.createElement('input')
const br = document.createElement('br')
const br2 = document.createElement('br')
// const boxes = document.createElement('div')
let columns = 7
let rows = 6
let gameOver = true
const player1 = document.createElement('div')
let player2
let p1
let p2

section.innerHTML = "Player 1"
input1.style.width = "75px"
section.append(br)
section.appendChild(input1)
submit.innerText = 'Submit'
section.appendChild(submit)

// main.style.height = '550px'
// main.style.width = '698px'
// // main.style.backgroundColor = 'blue'
// main.style.border = '3px solid black'
// main.style.margin ='35px'
// main.style.textAlign = 'center'
// main.style.flexWrap = 'wrap'
// main.style.display = 'flex'

aside.innerHTML = "Player 2"
input2.style.width = '75px'
aside.append(br2)
aside.appendChild(input2)
submit2.innerText = 'Submit'
aside.appendChild(submit2)


// Event Listeners
endGame.addEventListener('click', () =>{
    location.reload()
})

submit.addEventListener('click', () =>{
    if(input1.value == 'red') player1.classList.add('.red') //redChip
    // else if (input1.value == 'yellow') player1 = yellowChip
    p1 == true && p2 == false
    input1.value = ' '
    console.log(player1)
})


// window.onload = function() {
//     gameBoard = []

//     for(let i=0; i<rows; i++){
//         let rowArr = []
//         for(let t=0; t<columns; t++){
//             rowArr.push(' ')

//             const boxes = document.createElement('div')
//             boxes.id = i.toString() + "-" + t.toString()
//             boxes.classList.add("boxes")
//             boxes.style.width = '90px'
//             boxes.style.height = '89px'
//             boxes.style.border = '1px solid black'
//             boxes.style.backgroundColor = 'white'
//             boxes.style.margin = 'auto'
//             boxes.style.borderRadius = '50%'
//             boxes.className = 'boxes'
//             boxes.addEventListener('click', turn())
//             main.append(boxes)
//         }
//         gameBoard.push(rowArr)
//     }
// }

function turn(){
    if(gameOver) return

    let boxes = this
    if(p1){
        boxes.classList.add('red')
        p2 = true
    }
    
}


/* citation: "How to Build Connect 4 with Javascript HTML CSS" YouTube, uploaded by Kenny Yip Coding, 06, Feb, 2022,
               https://www.youtube.com/watch?v=4ARsthVnCTg. */



boxes.addEventListener('click', (e) =>{
    if(p1) boxes.classList.add('.red')
})





