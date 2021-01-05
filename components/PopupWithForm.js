function qs(selector) {
    return document.querySelector(selector);
  }
  
  function formSubmitHandler(evt) {
    evt.preventDefault();
    qs('.profile__name').textContent = qs('.popup__input_type_name').value;
    qs('.profile__description').textContent = qs('.popup__input_type_description').value;
    closeEditForm();
  }
  
  function closeEditForm() {}
  
  document.getElementById('submit').addEventListener('click', formSubmitHandler);