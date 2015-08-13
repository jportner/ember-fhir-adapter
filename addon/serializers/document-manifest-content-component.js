import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DocumentManifestContentComponent = ApplicationSerializer.extend({
    attrs:{
        pAttachment : {embedded: 'always'}
    }
});
export default DocumentManifestContentComponent;
