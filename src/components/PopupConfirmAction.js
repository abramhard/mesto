import Popup from './Popup.js';
export default class PopupConfirmAction extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    setConfirmAction(remove) {
        this._handleSubmit = remove;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
            this.close()
        });
    }
}