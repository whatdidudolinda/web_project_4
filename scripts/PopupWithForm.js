import Popup from './Popup'

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList = Array.from(this._form.querySelectorAll('.form__input'));

        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        })

        return this._inputValues;
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (e) => {
            e.eventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });

        super.setEventListeners();
    }
}