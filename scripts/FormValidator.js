class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
    }

    _showErrorMessage(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.add(this._settings.inputErrorClass);
        error.textContent = input.validationMessage;
        error.classList.add(this._settings.errorClass);
    }
    _hideErrorMessage(input) {
        const error = this._formElement.querySelector(`#${input.id}-error`);
        input.classList.remove(this._settings.inputErrorClass);
        error.classList.remove(this._settings.errorClass);
        error.textContent = '';
    }
    _checkInputValidity(input) {
        if (!input.validity.valid) {
            this._showErrorMessage(input, input.validationMessage);

        } else {
            this._hideErrorMessage(input);
        }
    }
    _hasInvalidInput(inputs) {
        return inputs.some((input) => {
            return !input.validity.valid;
        });
    }
    _toggleButtonState(inputs, button) {
        if (this._hasInvalidInput(inputs)) {
            button.classList.add(this._settings.inactiveButtonClass);
            button.disabled = true;
        } else {
            button.classList.remove(this._settings.inactiveButtonClass);
            button.disabled = false;
        }
    }
    _setEventListeners() {
        const inputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector))
        const button = this._formElement.querySelector(this._settings.submitButtonSelector);

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState(inputs, button, this._settings.inactiveButtonClass);
            });
        });
    }
    enableValidation() {
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        this._setEventListeners();
    }
}

export default FormValidator;