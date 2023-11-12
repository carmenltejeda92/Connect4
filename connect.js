/*  Author: Carmen Tejeda
    Date: 11/07/2023
    Purpose: Creating a connect 4 game for two players.  */

const body = document.querySelector('#body')
const header = document.querySelector('#connect')
const section = document.querySelector('#playerOne')
const main = document.querySelector('#gameBoard')
const aside = document.querySelector('#playerTwo')
const footer = document.querySelector('.bottomButtons')
const endGame = document.querySelector('#endGame')
const input1 = document.createElement('input')
const input2 = document.createElement('input')
const br = document.createElement('br')
const br2 = document.createElement('br')
const submit = document.createElement('button')
const submit2 = document.createElement('button')
const boxes = document.createElement('div')
let columns = 7
let rows = 6
let gameOver = true
const player1 = document.createElement('div')
let player2
let p1
let p2

header.style.height = '50px'
header.style.width = '150px'
header.style.backgroundColor = 'white'
header.style.border = '1px solid black'
header.style.margin = 'auto'
header.style.textAlign = 'center'
header.style.alignContent = 'center'

section.style.height = '150px'
section.style.width = '150px'
section.style.backgroundColor = 'white'
section.style.border = '1px solid black'
section.style.margin = '35px'
section.style.textAlign = 'center'
section.innerHTML = "Player 1"
input1.style.width = "75px"
section.append(br)
section.appendChild(input1)
submit.innerText = 'Submit'
section.appendChild(submit)

main.style.height = '500px'
main.style.width = '698px'
main.style.backgroundColor = 'blue'
main.style.border = '3px solid black'
main.style.margin ='35px'
main.style.textAlign = 'center'
main.style.flexWrap = 'wrap'
main.style.display = 'flex'

aside.style.height = '150px'
aside.style.width = '150px'
aside.style.backgroundColor = 'white'
aside.style.border = '1px solid black'
aside.style.margin = '35px'
aside.style.textAlign = 'center'
aside.innerHTML = "Player 2"
input2.style.width = '75px'
aside.append(br2)
aside.appendChild(input2)
submit2.innerText = 'Submit'
aside.appendChild(submit2)

footer.style.height = '50px'
footer.style.width = '400px'
footer.style.backgroundColor = 'white'
footer.style.border = '1px solid black'
footer.style.margin = '35px'
footer.style.textAlign = 'center'


let redChip = document.createElement('div')
redChip.style.backgroundColor = 'red'
redChip.style.borderRadius = '50%'
redChip.style.height = '75px'
redChip.style.width = '75px'
redChip.className.add('red')

const yellowChip = document.createElement('div')
yellowChip.style.backgroundColor = 'Yellow'
yellowChip.style.borderRadius = '50%'
yellowChip.style.height = '75px'
yellowChip.style.width = '75px'


// Event Listeners
endGame.addEventListener('click', () =>{
    location.reload()
})

submit.addEventListener('click', () =>{
    if(input1.value == 'Red') {
        player1.classList.add('.red')}
    else if (input1.value == 'yellow') player1 = yellowChip
    p1 == true && p2 == false
    input1.value = ' '
    console.log(player1)
})

submit2.addEventListener('click', () =>{
    if(input2.value == 'Red') player2 = redChip
    else if(input2.value == 'yellow') player2 == yellowChip
})

window.onload = function() {
    gameBoard = []

    for(let i=0; i<rows; i++){
        let rowArr = []
        for(let t=0; t<columns; t++){
            rowArr.push(' ')

            const boxes = document.createElement('div')
            boxes.id = i.toString() + "-" + t.toString()
            boxes.classList.add("boxes")
            boxes.style.width = '98px'
            boxes.style.height = '82px'
            boxes.style.border = '1px solid black'
            boxes.className = 'boxes'
            boxes.addEventListener('click', turn())
            main.append(boxes)
        }
        gameBoard.push(rowArr)
    }
}

function turn(){
    if(gameOver) return

    let boxes = this
    if(p1){
        boxes.classList.add('.red')
        // e.target.className === 'boxes'
        // e.target.style.backgroundColor = 'red'
    }
}


/* citation: "How to Build Connect 4 with Javascript HTML CSS" YouTube, uploaded by Kenny Yip Coding, 06, Feb, 2022,
               https://www.youtube.com/watch?v=4ARsthVnCTg. */


// main.addEventListener('click', (e) =>{
   
// })












