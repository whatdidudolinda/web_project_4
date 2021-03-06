import './styles/index.css';

import { imageModalWindow, openPopup, closePopup, keyPress } from '../components/utils.js'
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import { initialCards } from '../components/array.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithimage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

const editProfilePopup = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleFormSubmit: ({ name, description }) => {
        userInfo.setUserInfo(name, description);
    },
});

editProfilePopup.setEventListeners();

const section = new Section({
    renderer: (data) => {
        const card = new Card({
            data,
            handleCardClick: (link, name) => {
                imagePopup.open(link, name);
            }
        }, '.card-template');
        section.addItem(card.generateCard());
    }
}, '.cards__list')

section.renderItems(initialCards);

const addCardPopup = new PopupWithForm({
    popupSelector: '.popup_type_add-card',
    handleFormSubmit: (items) => {
        const card = new Card({
            data: items,
            handleCardClick: (link, name) => {
                imagePopup.open(link, name);
            }
        }, '.card-template');
        list.prependItem(card.createCard(items));
    }
});

const imagePopup = new PopupWithimage('.popup_type_image');

imagePopup.setEventListeners();

const userInfo = new UserInfo({
    profileNameSelector: '.profile__name',
    profileDescriptionSelector: '.profile__description'
});

//Wrappers// 
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const editProfileModalWindow = document.querySelector('.popup_type_edit-profile');
const form = document.querySelector('.form');
const profileForm = document.querySelector('.form_edit');
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
const btnClose = editProfileModalWindow.querySelector('.popup__btn-close');
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
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__save-button',
    inactiveButtonClass: 'form__save-button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'popup__error_visible'
};

const editProfileValidator = new FormValidator(settings, document.querySelector('.form_edit'));
const addCardValidator = new FormValidator(settings, document.querySelector('.form_add-card'));
editProfileValidator.enableValidation();
addCardValidator.enableValidation();

//Card Function// 
// initialCards.forEach((data) => {
//     const card = new Card(data, '.card-template');
//     list.append(card.generateCard());
// });

section.renderItems(initialCards);

function addCard(evt) {
    evt.preventDefault();

    const addCardData = {
        name: formTitle.value,
        link: formUrl.value
    };

    const newCard = new Card(addCardData, '.card-template');
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

profileForm.addEventListener('submit', profileSubmit);

//Open Edit Profile & Add Card// 
editButton.addEventListener('click', () => {
    formName.value = profileName.textContent;
    formDescription.value = profileDescription.textContent;
    editProfileValidator.resetValidation();
    openPopup(editProfileModalWindow);
});

addCardModalButton.addEventListener('click', () => {
    formTitle.value = '';
    formUrl.value = '';
    addCardValidator.resetValidation();
    openPopup(addCardModalWindow);
});