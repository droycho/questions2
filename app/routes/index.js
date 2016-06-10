import Ember from 'ember';

  var answers = [{
    id: 1,
    author: "DJroychoudhury",
    content: "This is a test answer. This answer should only show up for this one question."
  }, {
    id: 2,
    author: "Some Body",
    content: "This is another test answer. should only show up for this other answer."
  }, {
    id: 3,
    author: "Another Body",
    content: "Another test answer. Should show up alone with this question."
  }];
  export default Ember.Route.extend({
    model() {
      return answers;
    },
});
