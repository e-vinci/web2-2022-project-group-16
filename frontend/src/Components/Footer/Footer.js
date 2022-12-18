import pauseBtn from '../../img/pause.png';
import pauseBtnPressed from '../../img/pause-pressed.png';
import playBtn from '../../img/play.png';
import playBtnPressed from '../../img/play-pressed.png';
// import audio from '../../audio/select.wav';
import RulesModal from '../Modal/RulesModal';

const Footer = (audio) => {
    document.querySelector('footer').innerHTML = `<div><button id="pause-music"><img class="button" src="${pauseBtn}" alt="pause button"><audio preload="auto"><source src="${audio}" type="audio/wav"></audio></button><input type="range" id="volume-slider"></div><div><button id="modal-btn">How to play</button></div>`;
    RulesModal();
    const btnCloseModal = document.getElementById('close-modal');
    const modal = document.getElementById('modal');
    btnCloseModal.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    const modalBtn = document.getElementById('modal-btn');
    modalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    const volume = document.getElementById("volume-slider");
    volume.addEventListener('change', (e) => {
        // eslint-disable-next-line no-param-reassign
        audio.volume = e.currentTarget.value / 100;
    })
    const pause = document.getElementById("pause-music");
    pause.addEventListener('click', () => {
        // eslint-disable-next-line no-unused-expressions
        if(!audio.paused){
            audio.pause();
        }else{
            audio.play();
        }
    })
    pause.addEventListener('mousedown', () => {
        if(audio.paused){
            pause.firstChild.src = playBtnPressed;
        }else{
        pause.firstChild.src = pauseBtnPressed;
        }
    })
    pause.addEventListener('mouseup', () => {
        if(!audio.paused){
            pause.firstChild.src = playBtn;
        }else{
            pause.firstChild.src = pauseBtn;
        }
    })
}

export default Footer;