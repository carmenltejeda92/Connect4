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


section.style.height = '300px'
section.style.width = '150px'
section.style.backgroundColor = 'white'
section.style.border = '1px solid black'
section.style.margin = '35px'
section.style.textAlign = 'center'


main.style.height = '500px'
main.style.width = '698px'
main.style.backgroundColor = 'white'
main.style.border = '3px solid black'
main.style.margin ='35px'
main.style.textAlign = 'center'
main.style.flexWrap = 'wrap'
main.style.display = 'flex'



aside.style.height = '300px'
aside.style.width = '150px'
aside.style.backgroundColor = 'white'
aside.style.border = '1px solid black'
aside.style.margin = '35px'
aside.style.textAlign = 'center'


footer.style.height = '50px'
footer.style.width = '400px'
footer.style.backgroundColor = 'white'
footer.style.border = '1px solid black'
footer.style.margin = '35px'
footer.style.textAlign = 'center'


//loop to create game board
for(let i=0; i<42; i++){
    const boxes = document.createElement('div')
    boxes.style.width = '98px'
    boxes.style.height = '82px'
    boxes.style.border = '1px solid black'
    boxes.className = 'boxes'
    main.appendChild(boxes)
}

//Player one Color button
const poRed = document.querySelector('#poRed')
const poYellow = document.querySelector('#poYellow')
section.innerHTML = "Player 1"
section.appendChild(poRed)
section.appendChild(poYellow)

//Player two color button
const ptRed = document.querySelector('#ptRed')
const ptYellow = document.querySelector('#ptYellow')
aside.innerHTML = "Player 2"
aside.appendChild(ptRed)
aside.appendChild(ptYellow)


const chip = document.createElement('div')

// Event Listeners
poRed.addEventListener('click', () =>{
    chip.style.backgroundColor = 'Red'
})


endGame.addEventListener('click', () =>{
    main.style.backgroundColor = 'white'
})







