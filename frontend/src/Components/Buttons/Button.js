import audio from '../../audio/select.wav';

const Button = (name, link, img) => `
<button data-uri="${link}">
    <img class="button ms-2" src="${img}" alt="${name} button">
    <audio preload="auto">
        <source src="${audio}" type="audio/wav">
    </audio>
</button>`;

export default Button;