function showErrorMessage (input, form, {errorClass,inputErrorClass, ...rest}) {
    const error = document.querySelectorAll('#', input.id + '-error');
    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

function hideErrorMessage (input, form, {errorClass,inputErrorClass, ...rest}) {
    const error = document.querySelectorAll('#', input.id + '-error');
    error.textContent = '';

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}


funciton checkInputValidity(input, form, rest) {
    if(input.validity.valid) {
        hideErrorMessage(input, form, reset)
    } else {
        showErrorMessage(input, form, reset)
    }
}

function toggleButtonState(inputs, button, {inactiveButtonClass,...rest}) {
    const isValid = inputs.every(() => input.validity.valid)

    if(isValid) {
        button.classList.remove(inactiveButtonClass)    
    } else {
        button.classList.add(inactiveButtonClass)
    }
}

funciton enableValidation({formSelector, inputSelector, submitButtonSelector,...rest}) {
    const forms = [...document.querySelectorAll(settings.formSelector)];

    forms.forEach((form) => {
        form.addEventListener('submit', ((e) =>
            e.preventDefault();
    }))

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelectorAll(submitButtonSelector);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(input, form, rest);
            toggleButtonState(inputs, button, rest);
        }) 
    })
})
}

enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "popup__error_visible"
});