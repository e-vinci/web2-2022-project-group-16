const Footer = () => {
    document.querySelector('footer').innerHTML = `<div><input type="range" id="volume-slider"></div><div><button data-toggle="modal" data-target="#myModal" id="myModal">How to play</button></div>`;
}

export default Footer;