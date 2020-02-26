export class Validator {
    constructor(userName) {
         this.userName = userName;
    }

    validateUsername(userName) {
        if (userName.search(/(^[^\d-_@.])+(\w)+([^\d-_@.])$/) == -1) {
             throw('Wrong user name!');
        } else {
            return userName;
        }
    }
}
