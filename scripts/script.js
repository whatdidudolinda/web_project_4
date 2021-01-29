//Wrappers//
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const editProfileModalWindow = document.querySelector('.popup_type_edit-profile');
const form = document.querySelector('.form');
const imageModalWindow = document.querySelector('.popup_type_image');
const formAddCard = document.querySelector('.form_add-card');

//openButtons//
const editButton = document.querySelector('.profile__edit-button');
const addCardModalButton = document.querySelector('.profile__add-button');

//closeButtons//
const closeAddCardModalButton = addCardModalWindow.querySelector('.popup__btn-close');
const btnClose = document.querySelector('.popup__btn-close');
const closePopupImage = imageModalWindow.querySelector('.popup__btn-close');

//Profile//
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//Form Inputs//
const formName = document.querySelector('.form__input_type_name');
const formDescription = document.querySelector('.form__input_type_description');
const formTitle = document.querySelector('.form__input_type_title');
const formUrl = document.querySelector('.form__input_type_url');
const newData = [{
    name: '',
    link: ''
},];

//Popup Toggle//
function toggleModalWindow(modal) {
    modal.classList.toggle('popup_is-opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = `${formName.value}`;
    profileDescription.textContent = `${formDescription.value}`;
    toggleModalWindow(editProfileModalWindow);
}

form.addEventListener('submit', handleFormSubmit);
editButton.addEventListener('click', () => {
    if (!editProfileModalWindow.classList.contains('popup_is')) {
        formName.value = profileName.textContent;
        formDescription.value = profileDescription.textContent;
    }
    toggleModalWindow(editProfileModalWindow);
});
btnClose.addEventListener('click', () => {
    toggleModalWindow(editProfileModalWindow);
});

addCardModalButton.addEventListener('click', () => {
    formTitle.value = '';
    formUrl.value = '';
    toggleModalWindow(addCardModalWindow);
});

closeAddCardModalButton.addEventListener('click', () => {
    toggleModalWindow(addCardModalWindow);
});

const initialCards = [
    {
        name: 'Yosemite Valley',
        link: 'https://code.s3.yandex.net/web-code/yosemite.jpg'
    },
    {
        name: 'Lake Louise',
        link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg'
    },
    {
        name: 'Bald Mountains',
        link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg'
    },
    {
        name: 'Latemar',
        link: 'https://code.s3.yandex.net/web-code/latemar.jpg'
    },
    {
        name: 'Vanoise National Park',
        link: 'https://code.s3.yandex.net/web-code/vanoise.jpg'
    },
    {
        name: 'Lago di Braies',
        link: 'https://code.s3.yandex.net/web-code/lago.jpg'
    }
];

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const list = document.querySelector('.cards__list');

//Default Cards//
initialCards.forEach(data => {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardTitle.textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;

    cardLikeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like-button_active');
    });

    cardDeleteButton.addEventListener('click', () => {
        const listItem = cardDeleteButton.closest('.card');
        listItem.remove();
    });

    cardImage.addEventListener('click', () => {
        const popupImage = imageModalWindow.querySelector('.popup__image');
        const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

        popupImage.src = data.link;
        popupImageTitle.textContent = data.name;

        toggleModalWindow(imageModalWindow);
    });
    list.prepend(cardElement);
});

closePopupImage.addEventListener('click', () => {
    toggleModalWindow(imageModalWindow);
});

//Add New Card//
function createNewCard(evt) {
    evt.preventDefault();
    const newCardElement = cardTemplate.cloneNode(true);

    const newCardImage = newCardElement.querySelector('.card__image');
    const newCardTitle = newCardElement.querySelector('.card__title');
    const newCardLikeButton = newCardElement.querySelector('.card__like-button');
    const newCardDeleteButton = newCardElement.querySelector('.card__delete-button');

    newData.name = `${formTitle.value}`;
    newData.link = `${formUrl.value}`;

    newCardTitle.textContent = newData.name;
    newCardImage.style.backgroundImage = `url(${newData.link})`;

    newCardLikeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like-button_active');
    });

    newCardDeleteButton.addEventListener('click', () => {
        const listItem = newCardDeleteButton.closest('.card');
        listItem.remove();
    });

    newCardImage.addEventListener('click', () => {
        const newPopupImage = imageModalWindow.querySelector('.popup__image');
        const newPopupImageTitle = imageModalWindow.querySelector('.popup__image-title');

        newPopupImage.src = newData.link;
        newPopupImageTitle.textContent = newData.name;

        toggleModalWindow(imageModalWindow)
    });

    list.prepend(newCardElement);
};

formAddCard.addEventListener('submit', createNewCard);