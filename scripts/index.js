import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {initialCards, enableValidation} from './constants.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import Section from "./Section.js";


// переменные для профиля
const formElementProfile = document.querySelector('#popup-form-profile');

const inputName = formElementProfile.querySelector('#popup-profile-name');
const inputJob = formElementProfile.querySelector('#popup-profile-job');

const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__job');
const popupProfile = document.querySelector('#popup-profile');
const popupCardAdd = document.querySelector('#popup-card-add');
const buttonOpenChangeProfile = document.querySelector('.profile__edit-button');

// переменные для карточки
const formElementCard = document.querySelector('#popup-form-card')
const buttonAddCard = document.querySelector('.profile__add-button');
const cardWindow = document.querySelector('#popup-card-add');

//блок для карточек
const blockCardsElement = document.querySelector('.elements');
const imageWindowCard = document.querySelector('#popup_view-image');
const imageCardInput = document.querySelector('#popup-card-name-picture');
const titleCardInput = document.querySelector('#popup-card-link');

const windowImage = new PopupWithImage(imageWindowCard);
const infoFromUser = new UserInfo({
    info: '.profile__job',
    name: '.profile__name'
});
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

function createCard (item) {
    const card = new Card ({
        data: item,
        handleCardClick: (name, link) => {
            windowImage.open(name, link)
        }
    },  '#template-cards');
    return card;
}
const cards = new Section({
        items: initialCards,
        renderer: (item) => {
            const sectionFromCard = createCard(item).createNewCard();
            cards.addItem(sectionFromCard);
        }
    },
    '.elements');

const addCardInProfile = new PopupWithForm({
    popupSelector: popupCardAdd,
    handleFormSubmit: (data) => {
        data ['name'] = data ['name'];
        data ['link'] = data ['link'];
        const cardElement = createCard(data).createNewCard();
        cards.addItem(cardElement);
    }
})

const editPopupProfile = new PopupWithForm ({
    popupSelector: popupProfile,
    handleFormSubmit: (data) => {
        infoFromUser.setUserInfo({info: data['job'], name: data['name']});
    }
})

buttonOpenChangeProfile.addEventListener('click', () => {
    const profileUser = infoFromUser.getUserInfo();
    inputJob.value = profileUser.info
    inputName.value = profileUser.name;
    formValidators['popup-form'].resetValidation();
    editPopupProfile.open()
});

buttonAddCard.addEventListener('click', () => {
    addCardInProfile.open();
    formValidators['card-form'].resetValidation();
});
addCardInProfile.setEventListeners();
editPopupProfile.setEventListeners();
windowImage.setEventListeners();
cards.renderItems();
enableValidationForm(enableValidation);

//функция для добавления карточки из массива
/*function addCardInPage (item) {
    blockCardsElement.append(createCard(item));
}
// функция добавления карточки в начало массива
function addCardInPageFromPrepend (item) {
    blockCardsElement.prepend(createCard(item));
}
initialCards.forEach((item) => {
    addCardInPage(item);
});
/*

function openProfile () {
    insertInputsValue(profileName.textContent, profileJob.textContent);
    popupProfile.open();
}*/

/*function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', pressButtonEsc);
    popup.addEventListener('mousedown',closePopupMouseDown);
}


function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', pressButtonEsc);
    popup.removeEventListener('mousedown', closePopupMouseDown)
}*/

/*function insertInputsValue ({name, info}) {
    inputName.value = name;
    inputJob.value = info;
}*/


/*function handleAddCardFormSubmit(evt) {
    evt.preventDefault();
    const cardImage = createCard ({name: imageCardInput.value, link: titleCardInput.value});
    const generateNewCard = cardImage.createNewCard();
    cards.addItem(generateNewCard);
    addCardInProfile.close();
    formValidators['popup-form'].resetValidation();

}*/

/*function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileInfo.textContent = inputJob.value;
    editPopupProfile.close()
}*/
/*function openCard () {
    addCardInProfile.open()
    formElementCard.reset()
    const buttonElement = cardWindow.querySelector('.popup__button-save');
    buttonElement.classList.add('popup__button-save_inactive');
    buttonElement.setAttribute('disabled', true);
}*/

//formElementProfile.addEventListener('submit', handleProfileFormSubmit);

//formElementCard.addEventListener('submit', handleAddCardFormSubmit);