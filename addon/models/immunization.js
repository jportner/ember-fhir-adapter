// Copyright (c) 2011-2015, HL7, Inc & The MITRE Corporation
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification,
// are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice, this
//       list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright notice,
//       this list of conditions and the following disclaimer in the documentation
//       and/or other materials provided with the distribution.
//     * Neither the name of HL7 nor the names of its contributors may be used to
//       endorse or promote products derived from this software without specific
//       prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
// NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


import DS from 'ember-data';


var Immunization = DS.Model.extend({
    identifier: DS.hasMany('identifier', {embedded: true}),
    status: DS.attr('string'),
    date: DS.attr('date'),
    vaccineCode: DS.belongsTo('codeable-concept', {embedded: true}),
    patient: DS.belongsTo('reference', {embedded: true}),
    wasNotGiven: DS.attr('boolean'),
    reported: DS.attr('boolean'),
    performer: DS.belongsTo('reference', {embedded: true}),
    requester: DS.belongsTo('reference', {embedded: true}),
    encounter: DS.belongsTo('reference', {embedded: true}),
    manufacturer: DS.belongsTo('reference', {embedded: true}),
    location: DS.belongsTo('reference', {embedded: true}),
    lotNumber: DS.attr('string'),
    expirationDate: DS.attr('date'),
    site: DS.belongsTo('codeable-concept', {embedded: true}),
    route: DS.belongsTo('codeable-concept', {embedded: true}),
    doseQuantity: DS.belongsTo('quantity', {embedded: true}),
    note: DS.hasMany('annotation', {embedded: true}),
    explanation:  DS.belongsTo('immunization-explanation-component', {embedded: true}),
    reaction:  DS.hasMany('immunization-reaction-component', {embedded: true}),
    vaccinationProtocol:  DS.hasMany('immunization-vaccination-protocol-component', {embedded: true})
});
export default Immunization;
