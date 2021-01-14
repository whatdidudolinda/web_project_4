//Profile//
let editButton = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
//Modal//
let modal = document.querySelector(".modal");
//Form//
let form = document.querySelector(".form");
let btnClose = document.querySelector(".modal__btn-close");
let formName = document.querySelector(".form__input_type_name");
let formDescription = document.querySelector(".form__input_type_description");

//Modal Popup//
function toggleModalWindow() {
    modal.classList.toggle('modal_open')
}

editButton.addEventListener('click', function () {
    toggleModalWindow();
    formName.value = profileName.textContent;
    formDescription.value = profileDescription.textContent;

})

function handleFormSubmit(evt) {
    evt.preventDefault();
    toggleModalWindow();
    profileName.textContent = `${formName.value}`;
    profileDescription.textContent = `${formDescription.value}`;
}

btnClose.addEventListener('click', toggleModalWindow);
form.addEventListener('submit', handleFormSubmit);