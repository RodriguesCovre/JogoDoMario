const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem')

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = "/img/Screen-Shot-2019-07-18-at-2.55.50-PM-removebg-preview.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        nuvem.style.animation = 'none';
        nuvem.style.top = '${pipePosition}px';

        clearInterval(loop);
    }

}, 10);
document.addEventListener('keydown', jump);