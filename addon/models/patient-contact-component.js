import DS from 'ember-data';

var PatientContactComponent = DS.Model.extend({
    relationship: DS.hasMany('codeable-concept', {embedded: true}),
    name: DS.belongsTo('human-name', {embedded: true}),
    telecom: DS.hasMany('contact-point', {embedded: true}),
    address: DS.belongsTo('address', {embedded: true}),
    gender: DS.attr('string'),
    organization: DS.belongsTo('reference', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true})
});
export default PatientContactComponent;
