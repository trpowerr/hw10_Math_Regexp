export class Validator {
    constructor(userName) {
         this.userName = userName;
    }

    validateUsername(userName) {
        if (userName.search(/(^[a-z+A-Z]+)([\w-]*)([a-z+A-Z]$)/) == -1) {
             throw('Wrong user name!');
        } else {
            return userName;
        }
    }
}
