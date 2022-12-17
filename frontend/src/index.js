import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';
import Router from './Components/Router/Router';
import sound from './audio/main_theme.wav';

const audio = new Audio(sound);
audio.volume = 1;
audio.loop = true;
audio.play();
Router(audio);