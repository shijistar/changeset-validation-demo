import Ember from 'ember';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import FormValidations from '../validations/test-form';

export default Ember.Route.extend({
    model() {
        return {
            person: {
                name: "",
                age: 20,
                email: "user@hello.com",
                level: 1,
                roles: [1, 2],
                activities: [{
                    name: "Morning meeting",
                    duration: 10
                }, {
                    name: "Project summary",
                    duration: 60
                }]
            }
        };
    },
    setupController(controller, model) {
        console.log(arguments);
        controller.changeset = new Changeset(model.person, lookupValidator(FormValidations), FormValidations);
        this._super(...arguments);
    }
});

// function lookupValidator(validationMap) {
//     return ({ key, newValue }) => {
//         let possibleValidator = validationMap[key];
//         if (Array.isArray(possibleValidator) && possibleValidator.every(v => typeof v === "function")) {
//             return possibleValidator.map(v => v(key, newValue));
//         } else {
//             return "sdafsadf";
//         }
//     };
// };
