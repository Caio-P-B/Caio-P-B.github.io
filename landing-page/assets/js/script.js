const square1 = document.querySelector('.square1')
const square2 = document.querySelector('.square2')
const square3 = document.querySelector('.square3')
const square4 = document.querySelector('.square4')

function passOut () {
    square1.classList.remove('square_2')
    square2.classList.remove('square_2')
    square3.classList.remove('square_2')
    square4.classList.remove('square_2')
}

function passOver1 () {
    square1.classList.add('square_2')
    square2.classList.remove('square_2')
    square3.classList.remove('square_2')
    square4.classList.remove('square_2')
}



function passOver2 () {
    square2.classList.add('square_2')
    square1.classList.remove('square_2')
    square3.classList.remove('square_2')
    square4.classList.remove('square_2')
}



function passOver3 () {
    square3.classList.add('square_2')
    square2.classList.remove('square_2')
    square1.classList.remove('square_2')
    square4.classList.remove('square_2')
}



function passOver4 () {
    square4.classList.add('square_2')
    square2.classList.remove('square_2')
    square3.classList.remove('square_2')
    square1.classList.remove('square_2')
}