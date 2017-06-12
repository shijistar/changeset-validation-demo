// validations/employee.js
import {
    validatePresence,
    validateNumber,
    validateLength,
    validateConfirmation,
    validateFormat
} from 'ember-changeset-validations/validators';
// import validateCustom from '../validators/custom'; // local validator
// import validatePasswordStrength from '../validators/password-strength'; // local validator

export default {
    // person: {

    // },
    "name": [
        validatePresence(true),
        validateLength({ min: 4, max: 20 })
    ],
    "age": validateNumber({ gt: 18, lt: 60 }),
    "email": [
        validatePresence(true),
        validateFormat({ type: 'email' })
    ],
    "level": validateNumber({ gt: 0, lt: 6 }),
    "roles": [(key, newValue, oldValue, changes, content) => {
        // validation logic
        // return `true` if valid || error message string if invalid
        if (newValue == null || newValue.length == null || newValue.length === 0) {
            return "You have to choose one role";
        }
        return true;
    }],
    // passwordConfirmation: validateConfirmation({ on: 'password' })
};
