import { imageModalWindow, openPopup, closePopup, keyPress, popupImageTitle, popupImage } from './utils.js'

class Card { 
    constructor(data, cardTemplateSelector, handleCardClick) { 
        this._link = data.link; 
        this._name = data.name; 
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
    } 
 
    _setEventListeners() { 
        const cardLikeButton = this._card.querySelector('.card__like-button'); 
        const cardDeleteButton = this._card.querySelector('.card__delete-button'); 
        const cardImage = this._card.querySelector('.card__image'); 
 
        cardLikeButton.addEventListener('click', this._handleLikeIcon); 
        cardDeleteButton.addEventListener('click', this._handleDeleteCard); 

        cardImage.addEventListener('click', () => this._handleCardClick()); 
    } 
 
    _handleLikeIcon(evt) { 
        evt.target.classList.toggle('card__like-button_active'); 
    } 
 
    _handleDeleteCard(evt) { 
        evt.target.closest('.card').remove(); 
    } 
 
    _handleCardClick() {
        popupImage.src = this._link; 
        popupImage.alt = this._name; 
        popupImageTitle.textContent = this._name; 
 
        openPopup(imageModalWindow); 
    } 
 
    _getCardTemplate() { 
        const cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.card'); 
 
        return cardTemplate; 
    } 
 
    generateCard() { 
        this._card = this._getCardTemplate().cloneNode(true); 
        const cardImage = this._card.querySelector('.card__image'); 
        const cardTitle = this._card.querySelector('.card__title'); 
 
        cardImage.style.backgroundImage = `url(${this._link})`; 
        cardImage.src = this._link; 
        cardImage.alt = this._name; 
        cardTitle.textContent = this._name; 
 
        this._setEventListeners(); 
 
        return this._card; 
    } 
} 
 
export default Card; 