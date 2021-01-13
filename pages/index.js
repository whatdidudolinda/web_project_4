let editButton = document.querySelector(".profile__edit-button");
let addButton = document.querySelector(".profile__add-button");
let profile = document.querySelector(".profile")
let profileName = document.querySelector(".profile__name");
let profileDescri = document.querySelector(".profile__description");
let form = document.querySelector(".form");
let formSave = document.querySelector(".form__save-button")
let btnClose = document.querySelector(".form__btn-close");
let formName = document.querySelector(".form__input_type_name");
let formDescri = document.querySelector(".form__input_type_description");

function formOpen() {
    opened.classList.add("form_opened");
}

editButton.addEventListener("click", formOpen);

function formClose() {
    closed.classList.remove("form_opened");
}

btnClose.addEventListener("click", formClose);

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameInput.value = profileName.textcontent;
    descriInput.value = profileDescri.textcontent;
    profileName.textcontent = `${formName.value}`;
    profileDescri.textcontent = `${formDescri.value}`;
}

formSave.addEventListener("submit", handleFormSubmit);