'use strict';

// const modal = document.querySelector('.modal');
// const overLay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overLay.classList.remove('hidden');
// };

// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener('click', openModal);

// const tapOverlay = function () {
//   modal.classList.add('hidden');
//   overLay.classList.add('hidden');
// };

// btnCloseModal.addEventListener('click', tapOverlay);

// overLay.addEventListener('click', tapOverlay);

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overLay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function(e){
//   console.log(e.key);

//   if(e.key === 'Escape' && !modal.classList.contains('hidden')){
//        closeModal();
//     } 
// });

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    if(!modal.classList.contains('hidden'))
    closeModal();
  }
})



