// @todo: Темплейт карточки
const placesList = document.querySelector('.places__list');
// @todo: DOM узлы
// @todo: Функция создания карточки
function addCard(element) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);

  cardItem.querySelector('.card__image').src = element.link;
  cardItem.querySelector('.card__title').textContent = element.name;
  cardItem.querySelector('.card__image').alt = element.name;

  placesList.append(cardItem);    

  const cardDeleteButton = cardItem.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', function() {
    removeCard(cardItem);
  });
}

// @todo: Функция удаления карточки
function removeCard(cardItem) {
  cardItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach (function(element) {
  addCard(element);
})