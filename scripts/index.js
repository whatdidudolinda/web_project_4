import { imageModalWindow, openPopup, closePopup, keyPress } from './utils.js'
import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { initialCards } from './array.js';

//Wrappers// 
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const editProfileModalWindow = document.querySelector('.popup_type_edit-profile');
const form = document.querySelector('.form');
const formAddCard = document.querySelector('.form_add-card');

//openButtons// 
const editButton = document.querySelector('.profile__edit-button');
const addCardModalButton = document.querySelector('.profile__add-button');

//saveButton// 
const saveButton = document.querySelector('.form__save-button');

//Overlays// 
const editPopupOverlay = document.querySelector('.popup_type_edit-profile');
const addCardPopupOverlay = document.querySelector('.popup_type_add-card');
const imagePopupOverlay = document.querySelector('.popup_type_image');

//closeButtons// 
const closeAddCardModalButton = addCardModalWindow.querySelector('.popup__btn-close');
const btnClose = document.querySelector('.popup__btn-close');
const closePopupImage = imageModalWindow.querySelector('.popup__btn-close');

//Cards// 
const list = document.querySelector('.cards__list');

//Profile// 
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//Form Inputs// 
const formName = document.querySelector('.form__input_type_name');
const formDescription = document.querySelector('.form__input_type_description');
const formTitle = document.querySelector('.form__input_type_title');
const formUrl = document.querySelector('.form__input_type_url');
const data = [{
    name: '',
    link: ''
},];

const settings = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__save-button",
    inactiveButtonClass: "form__save-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "popup__error_visible"
}

const editProfileValidator = new FormValidator(settings, document.querySelector('.form_edit'));
const addCardValidator = new FormValidator(settings, document.querySelector('.form_add-card'));
editProfileValidator.enableValidation();
addCardValidator.enableValidation();

//Card Function// 
initialCards.forEach((data) => {
    const card = new Card(data, '.card-template');
    list.append(card.generateCard());
});

function addCard(evt) {
    evt.preventDefault();

    const addCardData = {
        name: formTitle.value,
        link: formUrl.value
    };

    const newCard = new Card(addCardData, ".card-template");
    list.prepend(newCard.generateCard());
    closePopup(addCardModalWindow);
};

formAddCard.addEventListener('submit', addCard);

//Popup Overlay Close// 
editPopupOverlay.addEventListener('click', (evt) => {
    if (evt.target === editPopupOverlay) {
        closePopup(editPopupOverlay);
    }
});

imagePopupOverlay.addEventListener('click', (evt) => {
    if (evt.target === imagePopupOverlay) {
        closePopup(imagePopupOverlay);
    }
});

addCardPopupOverlay.addEventListener('click', (evt) => {
    if (evt.target === addCardPopupOverlay) {
        closePopup(addCardPopupOverlay);
    }
});

//Close Popups// 
closePopupImage.addEventListener('click', () => {
    closePopup(imageModalWindow);
});

closeAddCardModalButton.addEventListener('click', () => {
    closePopup(addCardModalWindow);
});

btnClose.addEventListener('click', () => {
    closePopup(editProfileModalWindow);
});

//Profile// 
function profileSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = `${formName.value}`;
    profileDescription.textContent = `${formDescription.value}`;
    closePopup(editProfileModalWindow);
}

form.addEventListener('submit', profileSubmit);

//Open Edit Profile & Add Card// 
editButton.addEventListener('click', () => {
    if (!editProfileModalWindow.classList.contains('popup_is')) {
        formName.value = profileName.textContent;
        formDescription.value = profileDescription.textContent;
    }
    openPopup(editProfileModalWindow);
});

addCardModalButton.addEventListener('click', () => {
    formTitle.value = '';
    formUrl.value = '';
    openPopup(addCardModalWindow);
});