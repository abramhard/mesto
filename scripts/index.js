const popupFields = document.querySelectorAll('.popup');
// переменные для профиля
const formElementProfile = document.querySelector('#popup-form-profile');

const inputName = formElementProfile.querySelector('#popup-profile-name');
const inputJob = formElementProfile.querySelector('#popup-profile-job');

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

const templateForm = document.querySelector('#template-cards').content.querySelector('.element');

const imageCardInput = document.querySelector('#popup-card-name-picture');
const titleCardInput = document.querySelector('#popup-card-link');


const imageWindowCard = document.querySelector('.popup_view-image');


//обработчик отправки формы для профиля
function formSubmitHandlerProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupClose(popupProfile)
}
//обработчик отправки формы для карточки
function formSubmitHandlerCard(evt) {
    evt.preventDefault();
    addCardInPageFromPrepend ({name: imageCardInput.value, link: titleCardInput.value});
    popupClose(cardWindow)
}
// нажатие на кнопку ESC
function pressButtonEsc(evt) {
    evt.preventDefault();
    if(evt.key === 'Escape') {
        const popupWindowActive = document.querySelector('.popup_opened');
        popupClose(popupWindowActive);
    }
}
//чтение карточек из массива
function cardRenderFromArray (item) {
    const newTemplateForm = templateForm.cloneNode(true);
    const titleCard = newTemplateForm.querySelector('.element__title');
    titleCard.textContent = item.name;

    const linkCard = newTemplateForm.querySelector('.element__image')
    linkCard.src = item.link;
    linkCard.addEventListener('click', handleOpenViewCard);

    const likeCard = newTemplateForm.querySelector('.element__like-button');
    likeCard.addEventListener('click', pressButtonLike);

    const removeCard = newTemplateForm.querySelector('.element__delete-basket');
    removeCard.addEventListener('click', deleteCardInPage);
    return newTemplateForm;

}
//функция для добавления карточки из массива
function addCardInPage (item) {
    blockCardsElement.append(cardRenderFromArray(item));
}
// функция добавления карточки в начало массива
function addCardInPageFromPrepend (item) {
    blockCardsElement.prepend(cardRenderFromArray(item));
}
initialCards.forEach((item) => {
    addCardInPage(item);
});
function fieldProfile (name, job) {
    inputName.value = name;
    inputJob.value = job;
}

function handleOpenViewCard (evt) {
    const fieldCard = evt.target.closest('.element')
    const imageShowCard = document.querySelector('.popup__image');
    const nameShowCard = document.querySelector('.popup__subtitle');
    imageShowCard.src = fieldCard.querySelector('.element__image').src;
    nameShowCard.textContent = fieldCard.querySelector('.element__title').textContent;
    popupOpen(imageWindowCard)
}

function openProfile () {
    fieldProfile(profileName.textContent, profileJob.textContent);
    popupOpen(popupProfile);
}
//открытие попапа для создания карточки и сброс полей
function openCard () {
    formElementCard.reset();
    popupOpen(cardWindow)
}

function popupOpen(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', pressButtonEsc);
    document.addEventListener('mousedown',closePopupMouseDown);
}

function closePopupMouseDown (evt) {
    if (evt.target.classList.contains('popup_opened')) {
        popupClose(evt.target)
    }
}
function popupClose(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', pressButtonEsc);
    document.removeEventListener('mousedown', closePopupMouseDown)
}
function deleteCardInPage (evt) {
    evt.target.closest('.element').remove();
}

function pressButtonLike (evt) {
    evt.target.classList.toggle('element__like-button_active');
}


formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

formElementCard.addEventListener('submit', formSubmitHandlerCard);

buttonOpenChangeProfile.addEventListener('click', openProfile);
buttonAddCard.addEventListener('click', openCard);

//закрытие попапов на крестик
popupFields.forEach((popup) => {
    popup.querySelector('.popup__close').addEventListener('click', () => {popupClose(popup)})
});

