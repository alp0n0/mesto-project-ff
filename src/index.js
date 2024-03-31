import './pages/index.css'; // добавьте импорт главного файла стилей 

// @todo: Импорт
import { initialCards } from './scripts/cards.js';
import { createCard, deleteCard, likeButton } from './scripts/card.js';
import { openModal, closeModal } from './scripts/modal.js';

// @todo: Глобальные константы
const placesList = document.querySelector('.places__list');
const editButton = document.querySelector('.profile__edit-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const closePopup = popupTypeEdit.querySelector('.popup__close');
const addButton = document.querySelector('.profile__add-button');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const closePopupCard = popupTypeNewCard.querySelector('.popup__close');
const popupTypeImage = document.querySelector('.popup_type_image');

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');

// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

// Поля Input создания новой карточки
const elName = document.querySelector('.profile__title');
const elJob = document.querySelector('.profile__description');

// Функция редактирования личных данных
function handleFormSubmit(evt) {
    evt.preventDefault();    
    elName.textContent = nameInput.value;
    elJob.textContent = jobInput.value;
    closeModal(popupTypeEdit);    
}

// Функция вывода данных в поля input при открытие окна редактировать личные данные
function addInput() {
    nameInput.value = elName.textContent;
    jobInput.value = elJob.textContent;
}

// Слушатель на кнопку сохранения редактирования личных данных
document.forms[0].addEventListener('submit', handleFormSubmit); 

// Функция создания новой карточки
function newCard(evt) {
    evt.preventDefault();    
    const cardName = document.querySelector('.popup__input_type_card-name');
    const url = document.querySelector('.popup__input_type_url');
    const objCard = { name: cardName.value, link: url.value };
    return addNewCard(createCard(objCard, deleteCard, openImage, likeButton));
}
// Функция добавления новой карточки
function addNewCard(element) {
    placesList.prepend(element);
    closeModal(popupTypeNewCard);        
    document.forms[1].reset(); 
}

// Слушатель на кнопку сохранения новой карточки
document.forms[1].addEventListener('submit', newCard);

// Открыть модальное окно кликом на картинку
function openImage(element) {
    const popupImage = popupTypeImage.querySelector('.popup__image');
    const popupCaption = popupTypeImage.querySelector('.popup__caption');
    popupImage.src = element.link;
    popupImage.alt = element.name;
    popupCaption.textContent = element.name;
    openModal(popupTypeImage);
}

// Слушатель открытия модального окна редактирования личных данных
editButton.addEventListener('click', () => {
    openModal(popupTypeEdit, addInput());    
});

// Слушатель открытия модального окна добавление новой карточки
addButton.addEventListener('click', () => {
    openModal(popupTypeNewCard);
});

// Слушатель закрытия модального окна редактирования личных данных
closePopup.addEventListener('click', () => {
    closeModal(popupTypeEdit);
});

// Слушатель закрытия модального окна добавление новой карточки
closePopupCard.addEventListener('click', () => {
    closeModal(popupTypeNewCard);
});

// Слушатель Лайка
placesList.addEventListener('click', likeButton);

// @todo: Вывод карточек на страницу
initialCards.forEach((cardItem) => {
    placesList.append(createCard(cardItem, deleteCard, openImage, likeButton));
  })

