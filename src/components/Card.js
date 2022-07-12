export default class Card {
    constructor ({ cardInfo, handleCardClick, handleSetLikeCard, handleRemoveLikeCard, handleCardDelete, userId }, templateElements) {
        this._name = cardInfo.name;
        this._link = cardInfo.link;
        this._likes = cardInfo.likes;
        this._userId = userId;
        this._cardOwnerId = cardInfo.owner._id;
        this._cardId = cardInfo._id;
        this._handleSetLikeCard = handleSetLikeCard;
        this._handleRemoveLikeCard = handleRemoveLikeCard;
        this._handleCardDelete = handleCardDelete;
        this._handleCardClick = handleCardClick;
        this._templateElements = templateElements;

    }
    _getTemplate () {
        const elementCard = document
            .querySelector(this._templateElements)
            .content
            .querySelector('.element')
            .cloneNode(true)
        return elementCard
    }

    _setEventListeners () {
        this._image.addEventListener('click', () => this._handleCardClick(this._name, this._link));
        this._buttonLike.addEventListener('click',  () => this._getCardLike());
        this._buttonDelete.addEventListener('click', () => this._handleCardDelete())
    }

    _checkPutMyLike () {
        return this._likes.some((user) => {
            return this._userId === user._id;
    })
    }
    _getCardLike() {
        if (this._checkPutMyLike()) {
            this._handleRemoveLikeCard(this._cardId);
        } else {
            this._handleSetLikeCard(this._cardId);
        }
    }
    deleteLikeCard(data) {
        this._likes = data.likes;
        this._amountLikes.textContent = this._likes.length;
        this._buttonLike.classList.add('.element__like-button_active')
    }
    addLikeCard(data) {
        this._likes = data.likes;
        this._amountLikes.textContent = this._likes.length;
        this._buttonLike.classList.remove('.element__like-button_active')

    }
    deleteCardInPage () {
        this._elementCard.remove();
        this._elementCard = null;
    }
    _checkCardIdForDelete() {
        if (this._userId !== this._cardOwnerId) {
            this._buttonDelete.remove()
        }
    }
    createNewCard () {
        this._elementCard = this._getTemplate();

        this._image = this._elementCard.querySelector('.element__image');

        this._image.src = this._link;
        this._image.alt = this._name;
        this._buttonDelete = this._elementCard.querySelector('.element__delete-basket');
        this._amountLikes = this._elementCard.querySelector('.element__likes-amount');
        this._amountLikes.textContent = this._likes.length;
        this._buttonLike = this._elementCard.querySelector('.element__like-button')
        this._titleCard = this._elementCard.querySelector('.element__title');
        this._titleCard.textContent = this._name;
        this._checkCardIdForDelete()
        this._setEventListeners();
        return this._elementCard;
    }
}