// Функция открытия модального окна (+ закрытие на ESC, и Overlay)
export function openModal(element) {
    element.classList.add('popup_is-opened', 'popup_is-animated');    
    document.addEventListener('keydown', (evt) => escapeModal(evt, element));
    element.addEventListener('click', (evt) => clickOverlay(evt, element));    
}

// Функция закрытия модального окна
export function closeModal(element) {
    element.classList.remove('popup_is-opened');
    
}

// Функция закрытия по ESC
function escapeModal(evt, element) {
    if (evt.key === 'Escape') {
        closeModal(element);   
        document.removeEventListener('keydown', escapeModal);     
    }   
}

// Функция закрытия по Overlay
function clickOverlay(evt, element) {
  if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__close')) {
    closeModal(element);    
  }
}
