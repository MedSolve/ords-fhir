import {Values}     from    '../values';
import {ValueSet}   from    '../general/value-set';

export const quantityComparator: ValueSet = {
    id: 'quantity-comparator',
    meta: {
        lastUpdated: '2015-10-24T07:41:03.495+11:00',
        profile: [
            'http://hl7.org/fhir/StructureDefinition/valueset-shareable-definition'
        ]
    },
    text: {
        status: 'generated',
        div: '<div>!-- Snipped for Brevity --></div>'
    },
    extension: [
        {
            url: 'http://hl7.org/fhir/StructureDefinition/valueset-oid',
            valueUri: 'urn:oid:2.16.840.1.113883.4.642.2.34'
        }
    ],
    url: 'http://hl7.org/fhir/ValueSet/quantity-comparator',
    version: '1.0.2',
    name: 'QuantityComparator',
    status: 'draft',
    experimental: false,
    publisher: 'HL7 (FHIR Project)',
    contact: [
        {
            telecom: [
                {
                    system: 'other',
                    value: 'http://hl7.org/fhir'
                },
                {
                    system: 'email',
                    value: 'fhir@lists.hl7.org'
                }
            ]
        }
    ],
    date: '2015-10-24T07:41:03+11:00',
    description: 'How the Quantity should be understood and represented.',
    codeSystem: {
        extension: [
            {
                url: 'http://hl7.org/fhir/StructureDefinition/valueset-oid',
                valueUri: 'urn:oid:2.16.840.1.113883.4.642.1.34'
            }
        ],
        system: 'http://hl7.org/fhir/quantity-comparator',
        version: '1.0.2',
        caseSensitive: true,
        concept: [
            {
                code: '<',
                display: 'Less than',
                definition: 'The actual value is less than the given value.'
            },
            {
                code: '<=',
                display: 'Less or Equal to',
                definition: 'The actual value is less than or equal to the given value.'
            },
            {
                code: '>=',
                display: 'Greater or Equal to',
                definition: 'The actual value is greater than or equal to the given value.'
            },
            {
                code: '>',
                display: 'Greater than',
                definition: 'The actual value is greater than the given value.'
            }
        ]
    }
};
