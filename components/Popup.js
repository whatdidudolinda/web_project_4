export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(e) {
        if (e.keyCode === 27) {
            this.close();
        }
    }

    setEventListeners() {
        const closeButton = this._popup.querySelector('.popup__btn-close')

        closeButton.addEventListener('click', e => {
            this.close();
        })
    }
}