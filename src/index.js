import './pages/index.css'; // добавьте импорт главного файла стилей 

// @todo: Импорт
import { initialCards } from './scripts/cards.js';
import { createCard, deleteCard, clickLikeButton } from './scripts/card.js';
import { openModal, closeModal } from './scripts/modal.js';

// @todo: Глобальные константы

// Находим место вывода карточек
const placesList = document.querySelector('.places__list');

// Находим попапы
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');

// Находим кнопки открытия попапов
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

// Находим формы
const formElement = document.querySelector('.popup__form');

// Находим поля формы личных данных
const elName = document.querySelector('.profile__title');
const elJob = document.querySelector('.profile__description');

// Находим input формы личных данных
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

// Находим поля формы создания новой карточки
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupCaption = popupTypeImage.querySelector('.popup__caption');

// Находим поля input создания новой карточки
const cardName = document.querySelector('.popup__input_type_card-name');
const url = document.querySelector('.popup__input_type_url');

// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');


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
document.forms['edit-profile'].addEventListener('submit', handleFormSubmit); 

// Функция создания новой карточки
function createNewCard(evt) {
    evt.preventDefault();    
    const objCard = { name: cardName.value, link: url.value };
    return addNewCard(createCard(objCard, deleteCard, openImage, clickLikeButton));
}
// Функция добавления новой карточки
function addNewCard(element) {
    placesList.prepend(element);
    closeModal(popupTypeNewCard);        
    document.forms['new-place'].reset(); 
}

// Слушатель на кнопку сохранения новой карточки
document.forms['new-place'].addEventListener('submit', createNewCard);

// Открыть модальное окно кликом на картинку
function openImage(element) {
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

// Слушатель закрытия всех модальных окон на крестик
closeButtons.forEach((button) => {
    button.closest('.popup');
    button.addEventListener('click', () => closeModal);
});

// @todo: Вывод карточек на страницу
initialCards.forEach((cardItem) => {
    placesList.append(createCard(cardItem, deleteCard, openImage, clickLikeButton));
  })

