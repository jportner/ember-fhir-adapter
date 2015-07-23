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


var ClaimResponse = DS.Model.extend({
    identifier: DS.hasMany('identifier', {embedded: true}),
    request: DS.belongsTo('reference', {embedded: true}),
    ruleset: DS.belongsTo('coding', {embedded: true}),
    originalRuleset: DS.belongsTo('coding', {embedded: true}),
    created: DS.attr('date'),
    organization: DS.belongsTo('reference', {embedded: true}),
    requestProvider: DS.belongsTo('reference', {embedded: true}),
    requestOrganization: DS.belongsTo('reference', {embedded: true}),
    outcome: DS.attr('string'),
    disposition: DS.attr('string'),
    payeeType: DS.belongsTo('coding', {embedded: true}),
    item:  DS.hasMany('claim-response-items-component', {embedded: true}),
    addItem:  DS.hasMany('claim-response-added-item-component', {embedded: true}),
    error:  DS.hasMany('claim-response-errors-component', {embedded: true}),
    totalCost: DS.belongsTo('quantity', {embedded: true}),
    unallocDeductable: DS.belongsTo('quantity', {embedded: true}),
    totalBenefit: DS.belongsTo('quantity', {embedded: true}),
    paymentAdjustment: DS.belongsTo('quantity', {embedded: true}),
    paymentAdjustmentReason: DS.belongsTo('coding', {embedded: true}),
    paymentDate: DS.attr('date'),
    paymentAmount: DS.belongsTo('quantity', {embedded: true}),
    paymentRef: DS.belongsTo('identifier', {embedded: true}),
    reserved: DS.belongsTo('coding', {embedded: true}),
    form: DS.belongsTo('coding', {embedded: true}),
    note:  DS.hasMany('claim-response-notes-component', {embedded: true}),
    coverage:  DS.hasMany('claim-response-coverage-component', {embedded: true})
});
export default ClaimResponse;
