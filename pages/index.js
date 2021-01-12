import "./index.css";

const openModalButton = document.querySelector('.profile__edit-button');
const closeModalButton = document.querySelector('.modal__btn-close');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const nameInput = document.querySelector('.form__input_type_name');
const descriInput = document.querySelector('.form__input_type_description');

function toggleModalWindow() {
    modal.classList.toggle('modal_open')
}

openModalButton.addEventListener('click', function () {
    toggleModalWindow()

    nameInput.value = profileName.textContent;
    descriInput.value = profileDescri.textContent;
})

closeModalButton.addEventListener('click', toggleModalWindow)

form.addEventListener('submit', function () {
    profileName.textContent = nameInput.value;
    profileDescri.textContent = descriInput.value;

    toggleModalWindow()
})