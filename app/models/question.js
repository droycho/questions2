import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  user: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', {
    ansyc: true
  })
});
