const openModalButton = document.querySelector('.profile__edit-button');
const closeModalButton = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const nameInput = document.querySelector('.form__input_type_name');
const descriInput = document.querySelector('.form__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescri = document.querySelector('.profile__description');

function toggleModalWindow() {
    modal.classList.toggle('modal_open')
}

openModalButton.addEventListener('click' , function() {
    toggleModalWindow()
    // form.reset();

    nameInput.value = profileName.textContent;
    descriInput.value = profileDescri.textcontent;
})


closeModalButton.addEventListener('click' , toggleModalWindow)

form.addEventListener('click' , function(){
    profileName.textcontent = nameInput.value;
    profileDescri.textcontent = descriInput.value;

    toggleModalWindow()
})