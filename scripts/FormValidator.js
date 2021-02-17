class FormValidator {
    constructor(settings, form) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = form;
    }

    _showErrorMessage(input, { errorClass, inputErrorClass, ...rest }) {
        const error = this._form.querySelector(`#${input.id}-error`);

        error.textContent = input.validationMessage;
        input.classList.add(this._inputErrorClass);
        error.classList.add(this._errorClass);
    }

    _hideErrorMessage(input, { errorClass, inputErrorClass, ...rest }) {
        const error = this._form.querySelector(`#${input.id}-error`);

        error.textContent = '';
        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(input, form, rest) {
        if (input.validity.valid) {
            this._hideErrorMessage(input, form, rest)
        } else {
            this._showErrorMessage(input, form, rest)
        }
    }

    _toggleButtonState(inputs, button, { inactiveButtonClass, ...rest }) {
        const isValid = inputs.every((input) => input.validity.valid);

        if (isValid) {
            button.classList.add(this._inactiveButtonClass);
            button.disabled = true;
        } else {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;
        }
    }

    _setEventListeners() {
        const inputs = Array.form(this._form.querySelectorAll(this._inputSelector));
        const button = this._form.querySelector(this._submitButtonSelector);

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity();
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                checkInputValidity(input, form, rest);
                toggleButtonState(inputs, button, rest);
            });
            this._setEventListeners(); 
        });
    };
}


export default FormValidator;