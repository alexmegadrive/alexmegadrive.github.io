const calcBody = document.querySelector('.calc-body');
const numpadTextArea = document.querySelector('.numpad-textarea');
const calcContainer = document.querySelector('.calc-container');
const btnZero = document.querySelector('#zero-button');
const btnTotal = document.querySelector('#total-button');
const phoneUpperEl = document.querySelector('.calc-chelka');
const phoneDownEl = document.querySelector('.calc-chelka-niz')



document.querySelector('#flat').addEventListener('click', changeFlat);
document.querySelector('#mobile').addEventListener('click', changeMobile);
document.querySelector('#old').addEventListener('click', changeOld);


changeMobile();

function changeOld() {
  calcBody.classList.remove('calc-body_mobile')
  numpadTextArea.classList.remove('numpad-textarea_mobile')
  calcContainer.classList.remove('calc-container_mobile')
  calcBody.classList.remove('calc-body_flat')
  calcContainer.classList.remove('calc-container_flat')
  numpadTextArea.classList.remove('numpad-textarea_flat')

  const numbers = document.querySelectorAll('.number')
  for (const item of numbers) {
    item.style.backgroundColor = null
    item.style.color = null
    item.style.borderWidth = null
    item.style.borderRadius = '0%'
    item.style.height = '80px'
    item.style.width = '80px'
    item.style.margin = '0px'

  }

  const numberLast = document.querySelectorAll('.numberLast')
  for (const item of numberLast) {
    item.style.backgroundColor = null
  }
  const number1row = document.querySelectorAll('.number1row')
  for (const item of number1row) {
    item.style.backgroundColor = null
    item.style.color = null
  }

  btnZero.style.borderRadius = null;
  btnTotal.style.borderRadius = null;
  btnTotal.style.background = null;
  phoneUpperEl.style.display = 'none';
  phoneDownEl.style.display = 'none';
}


//flat style
function changeFlat() {
  calcBody.classList.remove('calc-body_mobile')
  numpadTextArea.classList.remove('numpad-textarea_mobile')
  calcContainer.classList.remove('calc-container_mobile')

  calcBody.classList.add('calc-body_flat')
  calcContainer.classList.add('calc-container_flat')
  numpadTextArea.classList.add('numpad-textarea_flat')

  const numbers = document.querySelectorAll('.number')
  for (const item of numbers) {
    item.style.backgroundColor = '#dbdbdb'
    item.style.color = '#000'
    item.style.borderWidth = '1px'
    item.style.borderRadius = '0%'
    item.style.height = '80px'
    item.style.width = '80px'
    item.style.margin = '0px'
  }

  const numberLast = document.querySelectorAll('.numberLast')
  for (const item of numberLast) {
    item.style.backgroundColor = '#ea7f2f'
  }
  const number1row = document.querySelectorAll('.number1row')
  for (const item of number1row) {
    item.style.backgroundColor = '#d0d0d0'
    item.style.color = '#000'
  }

  btnZero.style.borderRadius = '0 0 0 10px'
  btnTotal.style.borderRadius = '0 0 10px 0'
  btnTotal.style.background = 'rgb(234, 127, 47)'
  phoneUpperEl.style.display = 'none'
  phoneDownEl.style.display = 'none'
}



//mobile style
function changeMobile() {
  calcBody.classList.remove('calc-body_flat')
  calcContainer.classList.remove('calc-container_flat')
  numpadTextArea.classList.remove('numpad-textarea_flat')
  numpadTextArea.classList.add('numpad-textarea_mobile');
  calcContainer.classList.add('calc-container_mobile');
  calcBody.classList.add('calc-body_mobile');
  const numbers = document.querySelectorAll('.number')
  for (const item of numbers) {
    item.classList.remove('number_flat')
    item.style.backgroundColor = '#965ef1';
    item.style.color = '#fff';
    item.style.borderWidth = '0px';
    item.style.borderRadius = '50%';
    item.style.height = '70px';
    item.style.width = '70px';
    item.style.margin = '5px';
  }

  const numberLast = document.querySelectorAll('.numberLast')
  for (const item of numberLast) {
    item.style.color = '#8dd1f9';
  }

  btnTotal.style.borderRadius = '40px';
  btnTotal.style.background = 'linear-gradient(180deg, #e85ff8, #f719c8)';
  phoneUpperEl.style.display = 'block';
  phoneDownEl.style.display = 'block';
}