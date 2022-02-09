import { ModuleGraph } from 'webpack';
import './less/index.less'

// Your code goes here!
// for initial pull request

const body = document.querySelector('*')
const busImg = document.querySelector('.intro img');
const modal = document.querySelector('div.modal');
const copyright = document.querySelector('.footer p');
const navLinks = document.querySelectorAll('.nav a');

// 1
function vanText() {
    modal.classList.remove('off');
};
busImg.addEventListener('doubleclick', vanText)

// 2
function lawyerUp() {
    copyright.textContent = 'Have Fun or WE WILL SUE';
};
copyright.addEventListener('mouseover', lawyerUp);

// 3
function lawyerDown() {
    copyright.textContent = 'Copyright Fun Bus 2021'
};
copyright.addEventListener('mouseout', lawyerDown);

// 4
function obey() {
    navLinks.textcontent = 'OBEY';
};
navLinks.addEventListener('select', obey);

// 5 
function spaceBar(evt) {
  if (evt.key === 'Space') {
      document.querySelectorAll('p').color = 'white';
    }
}

body.addEventListener('keydown', spaceBar)



