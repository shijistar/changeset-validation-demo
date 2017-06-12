import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        changeLevel(e) {
            this.set("model.person.level", e.target.value);
        },
        changeRole(e) {
            let roles = this.get("model.person.roles");
            let newRoleId = Number(e.target.value);
        },
        save() {
            let changeset = this.get("changeset");
            changeset.validate().then(() => {
                if (changeset.get('isValid')) {
                    changeset.execute();
                };
            });
        }
    }
});
