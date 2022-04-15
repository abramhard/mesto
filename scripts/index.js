let formElement = document.querySelector('#popup-form');
let buttonOpenChangeProfile = document.querySelector('.profile__edit-button');
let buttonClosePopup = document.querySelector('.popup__close');

let inputName = formElement.querySelector('#popup-profile-name');
let inputJob = formElement.querySelector('#popup-profile-job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let saveButton = document.querySelector('.popup__button_save');
let likeButton = document.querySelector('.element__like-button');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    popupClose()
}
function pressButtonEsc(evt) {
    if(evt.key === 'Escape') {
        popupClose();
    }
}
function saveEditButton(evt) {
    if(evt.key === 'Enter') {
        formSubmitHandler(evt)
    }
}
function showCardItems() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popupOpen()
}
function popupOpen() {
    formElement.classList.add('popup__opened');
}
function popupClose() {
    formElement.classList.remove('popup__opened');
}
//Заготовка под Лайк
function pressButtonLike (evt) {
    evt.target.classList.toggle('element__like-button_active');
}
document.addEventListener('keydown', saveEditButton);
document.addEventListener('keydown', pressButtonEsc);

buttonOpenChangeProfile.addEventListener('click', showCardItems);
formElement.addEventListener('submit', formSubmitHandler);
buttonOpenChangeProfile.addEventListener('click', popupOpen);
buttonClosePopup.addEventListener('click', popupClose);
likeButton.addEventListener('click', pressButtonLike);
