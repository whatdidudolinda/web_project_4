let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');
let profileName = document.querySelector('.profile__name');
let profileDescri = document.querySelector('.profile__description');
let form = document.querySelector('.form');
let btnClose = document.querySelector('.form__btn-close');
let nameInput = document.querySelector('.form__input_type_name');
let descriInput = document.querySelector('.form__input_type_description');

function openForm() {
    let open = document.querySelector('.profile__edit-button');
    opened.classList.add('form_opened');
}

function closeForm() {
    let closed = document.querySelector('.form__btn-close');
    closed.classList.remove('form_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameInput.value = profileName.textContent;
    descriInput.value = profileDescri.textcontent;
    profileName.textcontent = nameInput.value;
    profileDescri.textcontent = descriInput.value;
}

// Connect the handler to the form:
// it will watch the submit event
editButton.addEventListener('click', openForm);
btnClose.addEventListener('click', closeForm);
form.addEventListener('submit', handleFormSubmit);