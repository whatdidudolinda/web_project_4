export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._formName = nameSelector;
        this._formDescription = jobSelector;
        this._name = document.querySelector(this._formName);
        this._description = document.querySelector(this._formDescription);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._description.textContent,
        };
    }

    setUserInfo(name, description) {
        this._name.textContent = name;
        this._description.textContent = description;
    }
}