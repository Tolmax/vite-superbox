import {generatePopupCard} from "./modals.js"
const elementTemplate = document.querySelector('#card-template').content;

export function createCard(data) {
    const cardElement = elementTemplate.querySelector('.elements__card').cloneNode(true);

    cardElement.querySelector('.elements__image').src = data.link;
    cardElement.querySelector('.elements__name').textContent = data.name;
    cardElement.querySelector('.elements__image').alt = data.name;

    const infoMiniCard = cardElement.querySelector('.elements__image')
    console.log(infoMiniCard);
    
    infoMiniCard.addEventListener('click', () => {
      generatePopupCard(data);
    })

    // const chooseButton = cardElement.querySelector('.elements__button'); 
    // chooseButton.addEventListener('click', chooseCard);

    return cardElement;
    };


  