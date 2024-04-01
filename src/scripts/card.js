// @todo: Функция создания карточки
export function createCard( element, deleteCard, openImage, likeButton ) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);

    const cardImages = cardItem.querySelector('.card__image');
    cardImages.src = element.link;
    cardImages.alt = element.name;
    cardItem.querySelector('.card__title').textContent = element.name;
    
    const cardDeleteButton = cardItem.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener('click', deleteCard);

    cardImages.addEventListener('click', () => openImage(element));

    // Слушатель Лайка
    cardItem.addEventListener('click', likeButton);

    return cardItem;    
}
  
  // @todo: Функция удаления карточки
export const deleteCard = (evt) => {
    const card = evt.target.closest('.card');
    card.remove();
}

  // @todo: Функция лайка
 export function likeButton(evt) {
    if (evt.target.classList.contains('card__like-button')) {
      evt.target.classList.toggle('card__like-button_is-active');
    }
}