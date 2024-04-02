// Функция открытия модального окна (+ закрытие на ESC, и Overlay)
export function openModal(element) {
    element.classList.add('popup_is-opened', 'popup_is-animated');    
    document.addEventListener('keydown', closeModalEscape);
    document.addEventListener('click', clickOverlay);    
}

// Функция закрытия модального окна
export function closeModal(element) {
    element.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalEscape); 
    document.removeEventListener('click', clickOverlay); 
}

// Функция закрытия по ESC
function closeModalEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopupESC = document.querySelector('.popup_is-opened');
      closeModal(openedPopupESC);   
    }   
}

// Функция закрытия по Overlay
function clickOverlay(evt) {
  if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__close')) {
    const openedPopupOverlay = document.querySelector('.popup_is-opened');
    closeModal(openedPopupOverlay);    
  }
}

