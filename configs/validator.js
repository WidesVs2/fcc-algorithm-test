const keyStr = /[a-zA-Z_-]{3,20}/g // 3-20 chars, lower || upper || - || _
const appNameStr = /[a-zA-Z_-]{3,60}/g //3-60 chars, lower || upper || - || _
const usernameStr = /^[A-Za-z]\w{7,14}$/ // 7-16 characters, only chars, digits, underscore, ^letter
const pwdStrings = {
    weak: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/, // 7-15 chars, one digit, one special
    moderate: /^[A-Za-z]\w{7,14}$/, // 7-16 characters, only chars, digits, underscore, ^letter
    strong: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, // 6-20 chars, one upper, one lower, one digit
    great: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ // 8-15 chars, one digit, one special, one lower, one upper
}
const zipStr = /\b\d{5}\b/g // 5 digits only
const emailStr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ //matches to valid emails

class validator {
    constructor(keyStr, appNameStr, usernameStr, pwdStrings, zipStr, emailStr) {
        this._keyStr = keyStr
        this._appNameStr = appNameStr
        this._usernameStr = usernameStr
        this._pwdStrings = pwdStrings
        this._zipStr = zipStr
        this._emailStr = emailStr
    }

    checkEmpty(val) {
        if (val == '') {
            return false
        } else {
            return true
        }
    }

    checkPwdLevel(str) {
        let msg = ''
        if (this.checkEmpty(str) === false) {
            msg = 'Empty Field'
            return msg
        } else {
            switch (str) {
                case this._pwdStrings.weak.test(str):
                    msg = 'weak'
                case this._pwdStrings.moderate.test(str):
                    msg = 'moderate'
                case this._pwdStrings.strong.test(str):
                    msg = 'strong'
                case this._pwdStrings.great.test(str):
                    msg = 'great'
                default:
                    msg = 'invalid'
            }
        }
        return msg
    }

    checkpwdMatch(str1, str2) {
        str1 === str2 ? true : false
    }

    checkKey(str) {
        let msg = ''
        if (this.checkEmpty(str) === false) {
            msg = 'Empty Field'
            return msg
        } else {
            if (this._keyStr.test(str)) {
                msg = 'Valid'
            } else {
                msg = 'Invalid'
            }
            return msg
        }
    }

    checkUsername(str) {
        let msg = ''
        if (this.checkEmpty(str) === false) {
            msg = 'Empty Field'
            return msg
        } else {
            if (this._usernameStr.test(str)) {
                msg = 'Valid'
            } else {
                msg = 'Invalid'
            }
            return msg
        }
    }

    checkEmail(str) {
        let msg = ''
        if (this.checkEmpty(str) === false) {
            msg = 'Empty Field'
            return msg
        } else {
            if (this._emailStr.test(str)) {
                msg = 'Valid'
            } else {
                msg = 'Invalid'
            }
            return msg
        }
    }

    checkAppName(str) {
        let msg = ''
        if (this.checkEmpty(str) === false) {
            msg = 'Empty Field'
            return msg
        } else {
            if (this._appNameStr.test(str)) {
                msg = 'Valid'
            } else {
                msg = 'Invalid'
            }
        }
        return msg
    }

    checkZip(code) {
        let msg = ''
        if (this.checkEmpty(str) === false) {
            msg = 'Empty Field'
            return msg
        } else {
            if (this._zipStr.test(code)) {
                msg = 'Valid'
            } else {
                msg = 'Invalid'
            }
        }
        return msg
    }

    validate(func) {
        let errors = []
        if (func === 'Valid') {
            return true
        } else if(func === 'Invalid') {
            errors.push(false, {error: 'Invalid'})
        } else {
            errors.push(false, {error: 'Validation Failed'})
        }
        if(errors.length > 0) return errors
    }
}

module.exports = Validator = new validator(keyStr, appNameStr, usernameStr, pwdStrings, zipStr, emailStr)