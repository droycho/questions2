import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: DS.attr(),
  user: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { ansyc: true})
});
