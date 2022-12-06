
const GetCard = () => {
    const card = document.querySelectorAll('.cards');

    Array.from(card).forEach((elem) => {
        elem.addEventListener('click', () => {
            const number = elem?.dataset?.number;
            const type = elem?.dataset?.type;
            console.log(`${type} - ${number}`);
        });
    })
}
 
export default GetCard;