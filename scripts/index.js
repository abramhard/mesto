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
const imageShowCard = document.querySelector('.popup__image');
const nameShowCard = document.querySelector('.popup__subtitle');

//обработчик отправки формы для профиля
function handleProfileFormSubmit(evt) {
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
}
// нажатие на кнопку ESC
function pressButtonEsc(evt) {
    evt.preventDefault();
    if(evt.key === 'Escape') {
        const popupWindowActive = document.querySelector('.popup_opened');
        closePopup(popupWindowActive);
    }
}
//чтение карточек из массива
function createCard (item) {
    const newTemplateForm = templateForm.cloneNode(true);
    const titleCard = newTemplateForm.querySelector('.element__title');
    titleCard.textContent = item.name;


    const linkCard = newTemplateForm.querySelector('.element__image')
    linkCard.src = item.link;
    linkCard.alt = item.name;
    linkCard.addEventListener('click',  handleOpenViewCard);

    const likeCard = newTemplateForm.querySelector('.element__like-button');
    likeCard.addEventListener('click', pressButtonLike);

    const removeCard = newTemplateForm.querySelector('.element__delete-basket');
    removeCard.addEventListener('click', deleteCardInPage);
    return newTemplateForm;

}
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
function insertInputsValue (name, job) {
    inputName.value = name;
    inputJob.value = job;
}

function handleOpenViewCard (evt) {
    const fieldCard = evt.target.closest('.element')
    imageShowCard.src = fieldCard.querySelector('.element__image').src;
    imageShowCard.alt = fieldCard.querySelector('.element__title').textContent;
    nameShowCard.textContent = fieldCard.querySelector('.element__title').textContent;

    openPopup(imageWindowCard)
}

function openProfile () {
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
}
function deleteCardInPage (evt) {
    evt.target.closest('.element').remove();
}

function pressButtonLike (evt) {
    evt.target.classList.toggle('element__like-button_active');
}
//открытие попапа для создания карточки и сброс полей
function openCard () {
    openPopup(cardWindow)
    formElementCard.reset()
    const buttonElement = cardWindow.querySelector('.popup__button-save');
    buttonElement.classList.add('popup__button-save_inactive');
    buttonElement.setAttribute('disabled', true);
}


formElementProfile.addEventListener('submit', handleProfileFormSubmit);

formElementCard.addEventListener('submit', handleAddCardFormSubmit);

buttonOpenChangeProfile.addEventListener('click', openProfile);
buttonAddCard.addEventListener('click', openCard);

//закрытие попапов на крестик
popupFields.forEach((popup) => {
    popup.querySelector('.popup__close').addEventListener('click', () => {closePopup(popup)})
});


