// @todo: Темплейт карточки
const placesList = document.querySelector('.places__list');
// @todo: DOM узлы
// @todo: Функция создания карточки
function createCard(element, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImages = cardItem.querySelector('.card__image');
  cardImages.src = element.link;
  cardImages.alt = element.name;
  cardItem.querySelector('.card__title').textContent = element.name;

  const cardDeleteButton = cardItem.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', deleteCard);

  return cardItem;
}

// @todo: Функция удаления карточки
const deleteCard = (evt) => {
  const card = evt.target.closest('.card');
  card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach (function(cardItem) {
  placesList.append(createCard(cardItem, deleteCard));
})