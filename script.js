const bolsonaro = document.querySelector('.bolsonaro');
const faca = document.querySelector('.faca');


const jump = () =>{

  bolsonaro.classList.add('jump'); 
  
  setTimeout(() => {
    bolsonaro.classList.remove('jump');
}, 500);

 }   

const loop = setInterval(() => {
  const facaPosition = faca.offsetLeft;
  const bolsonaroPosition = +window.getComputedStyle(bolsonaro).bottom.replace('px', '');

  console.log(bolsonaroPosition);
  
  if (facaPosition <= 85 && facaPosition  > 0 && bolsonaroPosition < 80){

    faca.style.animation = 'none';
    faca.style.left = `${facaPosition}px`;

    bolsonaro.style.animation = 'none';
    bolsonaro.style.bottom = `${bolsonaroPosition}px`;

bolsonaro.src='./img/game-over.png';
bolsonaro.style.marginLeft = '50px'

  }

}, 10);







 document.addEventListener('keydown', jump);

 const resetGame = () => {
  bolsonaro.src = './img/bolsonaro.png';
  bolsonaro.style.bottom = '0px';
  bolsonaro.style.marginLeft = '0px';
  bolsonaro.style.animation = '';
  faca.style.animation = '';
  faca.style.left = '600px';

  // Reinicia o loop
  setInterval(loop, 10);
};

function reiniciar (){
  window.location.reload();
 
 
 }

