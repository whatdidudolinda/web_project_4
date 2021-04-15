import Popup from './Popup.js'

class PopupWithimage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image')
        this._popupCaption = this._popup.querySelector('.popup__image-title')
    }

    open(link, name) {
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupCaption.textContent = name;
        super.open();
    }
}

export default PopupWithimage;