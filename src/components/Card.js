export default class Card {
    constructor({ data, cardSelector, userId, handleCardClick, handleDeleteClick, handleSetLike, handleRemoveLike}) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._cardId = data._id;

        this._handleCardClick = handleCardClick;
        this._handleSetLike = handleSetLike;
        this._handleRemoveLike = handleRemoveLike;
        this._handleDeleteClick = handleDeleteClick;

        this._cardSelector = cardSelector;
        this._userId = userId;
        this._cardOwnerId = data.owner._id;

    }
    _checkDeleteButton() {
        if (this._userId !== this._cardOwnerId) {
            this._buttonDelete.remove();
        }
    }
    _getTemplate () {
        const elementCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true)
        return elementCard
    }


    _setEventListeners() {
        this._buttonDelete
            .addEventListener("click", () => {
                this._handleDeleteClick(this._cardId);

            });
        this._buttonLike.addEventListener("click", () => {
            if (this._buttonLike.classList.contains('element__like-button_active')) {
                this._handleRemoveLike(this._cardId);
            } else {
                this._handleSetLike(this._cardId);
            }
        })
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });

    }
    deleteCard() {
        this._element.remove();
        this._element = null;
    }
    handleLikeCard(data) {
        this._likes = data.likes;
        this._likesNumber.textContent = this._likes.length;
        this._buttonLike.classList.toggle('element__like-button_active');
    }
    _checkPutMyLike() {
        if (this._likes.some((user) => {
            return this._userId === user._id;
        })) {
            this._buttonLike.classList.add('element__like-button_active');
        }
    }
    createNewCard() {
        this._element = this._getTemplate();

        this._cardImage = this._element.querySelector(".element__image");
        this._buttonLike = this._element.querySelector(".element__like-button");
        this._buttonDelete = this._element.querySelector(".element__delete-basket");
        this._likesNumber = this._element.querySelector('.element__like-amount');
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this._checkDeleteButton();
        this._checkPutMyLike();
        this._likesNumber.textContent = this._likes.length;
        this._setEventListeners();

        return this._element;
    }


}