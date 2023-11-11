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


footer.style.height = '50px'
footer.style.width = '400px'
footer.style.backgroundColor = 'white'
footer.style.border = '1px solid black'
footer.style.margin = '35px'
footer.style.textAlign = 'center'


const redChip = document.createElement('div')
redChip.style.backgroundColor = 'red'
redChip.style.borderRadius = '50%'
redChip.style.height = '75px'
redChip.style.width = '75px'

const yellowChip = document.createElement('div')
yellowChip.style.backgroundColor = 'Yellow'
yellowChip.style.borderRadius = '50%'
yellowChip.style.height = '75px'
yellowChip.style.width = '75px'

// // Event Listeners
// poRed.addEventListener('click', () =>{
//     chip.style.backgroundColor = 'Red'
// })



// main.addEventListener('click', (e) =>{
//     if(e.target.className === 'boxes'){
//         e.target.style.backgroundColor = chip.style.backgroundColor
//     }
// })

// endGame.addEventListener('click', () =>{
//     location.reload()
// })
let columns = 7
let rows = 6

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
            main.appendChild(boxes)
        }
        gameBoard.push(rowArr)
    }
}
/* citation: "How to Build Connect 4 with Javascript HTML CSS" YouTube, uploaded by Kenny Yip Coding, 06, Feb, 2022,
               https://www.youtube.com/watch?v=4ARsthVnCTg. */



