//Profile//
let editButton = document.querySelector(".profile__edit-button");
let profile = document.querySelector(".profile");
let profileName = document.querySelector(".profile__name");
let profileDescri = document.querySelector(".profile__description");
let heart = document.querySelector(".card__button");
//Modal//
let modal = document.querySelector(".modal");
//Form//
let form = document.querySelector(".form");
let formSave = document.querySelector(".form__save-button");
let btnClose = document.querySelector(".modal__btn-close");
let formName = document.querySelector(".form__input_type_name");
let formDescri = document.querySelector(".form__input_type_description");

//Modal Popup//
function toggleModalWindow() {
    modal.classList.toggle('modal_open')
}

editButton.addEventListener('click', function() {
    toggleModalWindow()

    formName.value = profileName.textContent;
    formDescri.value = profileDescri.textContent;
})

btnClose.addEventListener('click', toggleModalWindow)

form.addEventListener('submit', function() {
    profileName.textContent = formName.value;
    profileDescri.textContent = formDescri.value;

    toggleModalWindow()
})