export const imageModalWindow = document.querySelector('.popup_type_image');

export function openPopup(modal) {
    modal.classList.add('popup_is-opened');
    document.addEventListener('keydown', keyPress);
}

export function closePopup(modal) {
    modal.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', keyPress);
}

export function keyPress(e) {
    const modal = document.querySelector('.popup_is-opened')
    if (e.key === "Escape") {
        closePopup(modal);
    }
}

export const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');
export const popupImage = imageModalWindow.querySelector('.popup__image');