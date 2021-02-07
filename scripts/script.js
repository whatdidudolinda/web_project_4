//Wrappers//
const addCardModalWindow = document.querySelector('.popup_type_add-card');
const editProfileModalWindow = document.querySelector('.popup_type_edit-profile');
const form = document.querySelector('.form');
const imageModalWindow = document.querySelector('.popup_type_image');
const formAddCard = document.querySelector('.form_add-card');
const popupImage = imageModalWindow.querySelector('.popup__image');
const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

//openButtons//
const editButton = document.querySelector('.profile__edit-button');
const addCardModalButton = document.querySelector('.profile__add-button');

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

//Popup Toggle//
function toggleModalWindow(modal) {
    modal.classList.toggle('popup_is-opened');
}

document.addEventListener('click', function (event) {
    if (!event.target.closest('.popup')) {
        closePopup(modal);
    }
});

function closePopup(modal) {
    modal.classList.remove('popup_is-opened');
}

closePopupImage.addEventListener('click', () => {
    toggleModalWindow(imageModalWindow);
});

//Profile//
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

//Card Function//
initialCards.forEach((data) => {
    addCard(data);
});

function createCard(data) {
    const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardTitle.textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;
    cardImage.alt = data.name;

    cardLikeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like-button_active');
    });

    cardDeleteButton.addEventListener('click', () => {
        const listItem = cardDeleteButton.closest('.card');
        listItem.remove();
    });

    cardImage.addEventListener('click', () => {
        popupImage.src = data.link;
        popupImageTitle.textContent = data.name;

        toggleModalWindow(imageModalWindow);
    })

    return cardElement;
}

function addCard(data) {
    const cardElement = createCard(data);
    list.prepend(cardElement);
};

function handleSubmit(evt) {
    evt.preventDefault();
    addCard({
        name: formTitle.value,
        link: formUrl.value
    });
    toggleModalWindow(addCardModalWindow);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (event.key === 'Escape') {
        closePopup(addCardModalWindow);
        closePopup(editProfileModalWindow);
        closePopup(imageModalWindow);
    }
});

document.addEventListener('click', function (event) {
    const key = event.key;
    if (event.key === 'Escape') {
        closePopup(addCardModalWindow);
        closePopup(editProfileModalWindow);
        closePopup(imageModalWindow);
    }
});

formAddCard.addEventListener('submit', handleSubmit);

addCardModalButton.addEventListener('click', () => {
    formTitle.value = '';
    formUrl.value = '';
    toggleModalWindow(addCardModalWindow);
});

closeAddCardModalButton.addEventListener('click', () => {
    toggleModalWindow(addCardModalWindow);
});