import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ElementDefinitionBindingComponent = ApplicationSerializer.extend({
    attrs:{
        valueSetUri : {embedded: 'always'},
				valueSetReference : {embedded: 'always'}
    }
});
export default ElementDefinitionBindingComponent;
