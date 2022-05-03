//import {initialCards} from "./Cards";
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const popupProfile = document.querySelector('#popup-profile');
const formElement = document.querySelector('.popup__form');
const buttonOpenChangeProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');
const cardWindow = document.querySelector('#popup-card-add');

const blockCardsElement = document.querySelector('.elements');
const popupFields = document.querySelectorAll('.popup');
const inputName = formElement.querySelector('#popup-profile-name');
const inputJob = formElement.querySelector('#popup-profile-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const saveButton = document.querySelector('.popup__button-save');
const likeButton = document.querySelector('.element__like-button');

const templateForm = document.querySelector('#template-cards').content.querySelector('.element');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupClose(popupProfile)
}
//обработчик отправки формы для карточки
function cardFormSubmitHandler(evt) {
    evt.preventDefault();

}

function pressButtonEsc(evt) {
    evt.preventDefault();
    if(evt.key === 'Escape') {
        const popupWindowActive = document.querySelector('.popup_opened');
        popupClose(popupWindowActive);
    }
}
function saveEditButton(evt) {
    if(evt.key === 'Enter') {
        formSubmitHandler(evt)
    }
};
//чтение карточек из массива
function cardRenderFromArray (item) {
    const newTemplateForm = templateForm.cloneNode(true);
    const titleCard = newTemplateForm.querySelector('.element__title');
    titleCard.textContent = item.name;

    return newTemplateForm;
}
//функция для добавления карточки
function addCardInPage (item) {
    blockCardsElement.append(cardRenderFromArray(item));
}
initialCards.forEach((item) => {
    addCardInPage(item);
})
function fieldProfile (name, job) {
    inputName.value = name;
    inputJob.value = job;
}

function openProfile () {
    fieldProfile(profileName.textContent, profileJob.textContent);
    popupOpen(popupProfile);
}
function openCard () {
    popupOpen(cardWindow)
}

function popupOpen(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', pressButtonEsc);
    document.addEventListener('mousedown',closePopupMouseDown);
}

function closePopupMouseDown (evt) {
    if (evt.target.classList.contains('popup_opened')) {
        popupClose(evt.target)
    }
}
function popupClose(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', pressButtonEsc);
    document.removeEventListener('mousedown', closePopupMouseDown)
}


function pressButtonLike (evt) {
    evt.target.classList.toggle('element__like-button_active');
}

document.addEventListener('keydown', saveEditButton);

formElement.addEventListener('submit', formSubmitHandler);
buttonOpenChangeProfile.addEventListener('click', openProfile);
buttonAddCard.addEventListener('click', openCard);
popupFields.forEach((popup) => {
    popup.querySelector('.popup__close').addEventListener('click', () => {popupClose(popup)})
});
likeButton.addEventListener('click', pressButtonLike);
saveButton.addEventListener('click', formSubmitHandler);
