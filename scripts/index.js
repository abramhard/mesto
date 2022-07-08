import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {initialCards, enableValidation} from './constants.js';
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import PopupWithForm from "./PopupWithForm.js";
const popupFields = document.querySelectorAll('.popup');
// переменные для профиля
const formElementProfile = document.querySelector('#popup-form-profile');

const inputName = document.querySelector('#popup-profile-name');
const inputJob = document.querySelector('#popup-profile-job');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

const buttonOpenChangeProfile = document.querySelector('.profile__edit-button');

const popupProfile = document.querySelector('#popup-profile');

// переменные для карточки
const formElementCard = document.querySelector('#popup-form-card')
const buttonAddCard = document.querySelector('.profile__add-button');
const cardWindow = document.querySelector('#popup-card-add');

//блок для карточек
const blockCardsElement = document.querySelector('.elements');

const imageCardInput = document.querySelector('#popup-card-name-picture');
const titleCardInput = document.querySelector('#popup-card-link');


const imageWindowCard = document.querySelector('#popup_view-image');
const imageShowCard = document.querySelector('.popup__image');
const nameShowCard = document.querySelector('.popup__subtitle');

const windowImage = new PopupWithImage(imageWindowCard)
const userInfo = new UserInfo({
    name: '.profile__name',
    info: '.profile__job',
})
//валидация
const formValidators = {};
const enableValidationForm = (enableValidation) => {
    const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
    formList.forEach((formElement) => {
        const validationForm = new FormValidator(enableValidation, formElement)
        validationForm.enableValidation();
        const formName = formElement.getAttribute('name');
        formValidators[formName] = validationForm;
    });
}
enableValidationForm(enableValidation);

function createCard (item) {
    const card = new Card ({
        data: item,
        handleCardClick: (name, link) =>
        windowImage.open(name, link)
        },
        '#template-cards');
    return card.createNewCard();
}
const editPopupProfile = new PopupWithForm ({
    popupSelector: popupProfile,
    handleFormSubmit: (data) => {
        userInfo.setUserInfo(data);
    }
})
buttonOpenChangeProfile.addEventListener('click', () => {
    const profileUser = userInfo.getUserInfo();
    inputJob.value = profileUser.info;
    inputName.value = profileUser.name;
    //formValidators['popup-form'].resetValidation();
    editPopupProfile.open()
});

editPopupProfile.setEventListeners()
//обработчик отправки формы для профиля
/*function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    closePopup(popupProfile)
}
//обработчик отправки формы для карточки
function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    addCardInPageFromPrepend ({name: imageCardInput.value, link: titleCardInput.value});
    closePopup(cardWindow)
}*/


//функция для добавления карточки из массива
function addCardInPage (item) {
    blockCardsElement.append(createCard(item));
}
// функция добавления карточки в начало массива
function addCardInPageFromPrepend (item) {
    blockCardsElement.prepend(createCard(item));
}
initialCards.forEach((item) => {
    addCardInPage(item);
});
/*function insertInputsValue (name, job) {
    inputName.value = name;
    inputJob.value = job;
}*/
//открытие попапа для создания карточки и сброс полей
/*function openCard () {
    openPopup(cardWindow)
    formElementCard.reset()
    const buttonElement = cardWindow.querySelector('.popup__button-save');
    buttonElement.classList.add('popup__button-save_inactive');
    buttonElement.setAttribute('disabled', true);
}

formElementProfile.addEventListener('submit', handleProfileFormSubmit);

formElementCard.addEventListener('submit', handleAddCardFormSubmit);


buttonAddCard.addEventListener('click', openCard);*/






//export {openPopup, imageShowCard, nameShowCard, imageWindowCard}

/*function openProfile () {
    insertInputsValue(profileName.textContent, profileJob.textContent);
    openPopup(popupProfile);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', pressButtonEsc);
    popup.addEventListener('mousedown',closePopupMouseDown);
}

function closePopupMouseDown (evt) {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target)
    }
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', pressButtonEsc);
    popup.removeEventListener('mousedown', closePopupMouseDown)
}*/
// нажатие на кнопку ESC
/*function pressButtonEsc(evt) {
    evt.preventDefault();
    if(evt.key === 'Escape') {
        const popupWindowActive = document.querySelector('.popup_opened');
        closePopup(popupWindowActive);
    }
}*/
//закрытие попапов на крестик
/*popupFields.forEach((popup) => {
    popup.querySelector('.popup__close').addEventListener('click', () => {closePopup(popup)})
});*/