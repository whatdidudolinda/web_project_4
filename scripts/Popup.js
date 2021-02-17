// class Popup {
//     constructor(popupSelector) {
//         this._popupElement = document.querySelector(popupSelector);
//         this._popupElement = this._handleEscClose.bind(this);
//     }
//     open() {
//         this._popupElement.classList.add('popup_is-opened');
//         document.addEventListener('keyup', this._handleEscClose);
//     }
//     close() {
//         this._popupElement.classList.remove('popup_is-opened');
//         document.addEventListener('keyup', this._handleEscClose);
//     }

//     _handleEscClose(e) {
//         if(e.which == 27) {
//             this.close();
//         }
//     }
    
//     setEventListeners() {
//         this._popupElement.addEventListener('click', (e) => {
//             if(e.target.classList.contains('popup__close') || e.target.closest('popup__container'));
//                 this.close();
//         })
//     }
// }

// const editPopup = new Popup('.popup_type_edit-profile');
// const addCarddPopup = new Popup('.popup_type_add-card');
// const imagePopup = new Popup('.popup_type_image');