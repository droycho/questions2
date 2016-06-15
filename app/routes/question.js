import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  //problem here is that 'question' is not being defined for some reason, no neither .get() nor .addObject() are able to be read.
  actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return answer.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
