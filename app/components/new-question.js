import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion1() {
      var params = {
        title: this.get('title'),
        user: this.get('user'),
        notes: this.get('notes'),
      };
      this.sendAction('saveQuestion2', params);
    }
  }
});
