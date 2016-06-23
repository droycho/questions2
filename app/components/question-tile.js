import Ember from 'ember';

export default Ember.Component.extend({

  totalAnswers: Ember.computed(question.get('answers').get('length'), function() {
    return this.get(question.get('answers').get('length'));
  }),

  actions: {
    destroyQuestion(question) {
      if (confirm('Are you sure you want to destroy this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
