class Card {
    constructor(data, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
    }
    _getCardTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);

        return cardTemplate;
    }

    _handleLikeIcon() {
        evt.target.classList.toggle('card__like-button_active');
    }

    _handleDeleteCard() {
        const listItem = cardDeleteButton.closest('.card');
        listItem.remove();
    }

    _handlePreviewPicture() {
        cardTitle.textContent = this._name;
        cardImage.style.backgroundImage = `url(${this._link})`;
        cardImage.alt = this._name;
        openPopup(imageModalWindow);
    }

    _setEventListeners() {
        const cardLikeButton = this._card.querySelector('.card__like-button');
        const cardDeleteButton = this._card.querySelector('.card__delete-button');
        const cardImage = this._card.querySelector('.card__image');

        cardLikeButton.addEventListener('click', this._handleLikeIcon);
        cardDeleteButton.addEventListener('click', this._handleDeleteCard);
        cardImage.addEventListener('click', this._handlePreviewPicture);
    }

    generateCard() {
        this._card = this._getCardTemplate().cloneNode(true);
        this._setEventListeners();

        const cardImage = this._card.querySelector('.card__image');
        const cardTitle = this._card.querySelector('.card__title');

        cardTitle.textContent = this._name;
        cardImage.style.backgroundImage = `url(${this._link})`;
        cardImage.alt = this._name;

        cardImage.addEventListener('click', () => {
            popupImage.src = this._link;
            popupImageTitle.textContent = this._name;
            openPopup(imageModalWindow);
        })

        return this._card;
    }
}

export default Card;