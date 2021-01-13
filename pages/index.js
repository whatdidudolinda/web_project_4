let editButton = document.querySelector(".profile__edit-button");
let profile = document.querySelector(".profile")
let profileName = document.querySelector(".profile__name");
let profileDescri = document.querySelector(".profile__description");
let modal = document.querySelector(".modal");
let form = document.querySelector(".form");
let formSave = document.querySelector(".form__save-button")
let btnClose = document.querySelector(".modal__btn-close");
let formName = document.querySelector(".form__input_type_name");
let formDescri = document.querySelector(".form__input_type_description");

function toggleModalWindow() {
    modal.classList.toggle('modal_open')
}

editButton.addEventListener('click' , functional() {
    toggleModalWindow()

    formName.value = profileName.textContent;
    formDescri.value = profileDescri.textContent;

})
btnClose.addEventListener('click' , toggleModalWindow)

form.addEventListener('submit' , function() {
    profileName.textcontent = formName.value;
    profileDescri.textContent = formDescri.value;

    toggleModalWindow()
})

// function formOpen() {
//     opened.classList.add("popup_open");
// }

// editButton.addEventListener("click", formOpen);

// function formClose() {
//     closed.classList.remove("popup_open");
// }

// btnClose.addEventListener("click", formClose);

// function handleFormSubmit(evt) {
//     evt.preventDefault();
//     nameInput.value = profileName.textcontent;
//     descriInput.value = profileDescri.textcontent;
//     profileName.textcontent = `${formName.value}`;
//     profileDescri.textcontent = `${formDescri.value}`;
// }

// formSave.addEventListener("submit", handleFormSubmit);