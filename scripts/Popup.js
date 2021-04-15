export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        document.addEventListener('keyup', this._handleEscClose)
        this._popup.classList.add('popup_open')
    }

    close() {
        document.removeEventListener('keyup', this._handleEscClose)
        this._popup.classList.remove('popup_open')
    }

    _handleEscClose(e) {
        if (e.keyCode === 27) {
            this.close()
        }
    }

    setEventListeners() {
        const closeButton = this._popup.querySelector('.popup__close-button')

        closeButton.addEventListener('click', e => {
            this.close()
        })
    }
}