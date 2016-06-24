import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

//for can't figure out how to get the computed property using one property, all examples are for computing new proprty from two or more other properties. just want the total number of answers each question has.

  totalAnswers: Ember.computed('question.answers.length', function() {
    var len = this.get('question.answers.length');
    console.log(len);
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
