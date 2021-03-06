import DS from 'ember-data';

var ImagingStudySeriesComponent = DS.Model.extend({
    number: DS.attr('number'),
    modality: DS.belongsTo('coding', {embedded: true}),
    uid: DS.attr('string'),
    description: DS.attr('string'),
    numberOfInstances: DS.attr('number'),
    availability: DS.attr('string'),
    url: DS.attr('string'),
    bodySite: DS.belongsTo('coding', {embedded: true}),
    laterality: DS.belongsTo('coding', {embedded: true}),
    started: DS.attr('date'),
    instance:  DS.hasMany('imaging-study-series-instance-component', {embedded: true})
});
export default ImagingStudySeriesComponent;
