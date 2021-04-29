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

    _toggleButtonState() {
        const isValid = this._inputs.every((input) => input.validity.valid);

        if (isValid) {
            this._button.classList.remove(this._settings.inactiveButtonClass);
            this._button.disabled = false;
        } else {
            this._button.classList.add(this._settings.inactiveButtonClass);
            this._button.disabled = true;
        }
    }
    _setEventListeners() {
        this._inputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector))
        this._button = this._formElement.querySelector(this._settings.submitButtonSelector);

        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButtonState();
            });
        });
    }
    resetValidation() {
        this._inputs.forEach((input) => {
            this._hideErrorMessage(input)
        });

        this._toggleButtonState();
    }
    enableValidation() {
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        this._setEventListeners();
    }
}

export default FormValidator; 