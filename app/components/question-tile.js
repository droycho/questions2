import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  totalAnswers: Ember.computed('question.answers.length', function() {
    var len = this.get('question.answers.length');
    return len;
  }),

  actions: {
    destroyQuestion(question) {
      if (confirm('Are you sure you want to destroy this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },

    addToList(item) {
      this.get('favoritesList').add(item);
    }
  }
});
