export const quantity: any = {
    resourceType: 'StructureDefinition',
    id: 'Quantity',
    meta: {
        lastUpdated: '2015-10-24T07:41:03.495+11:00'
    },
    text: {
        status: 'generated',
        div: '<div>!-- Snipped for Brevity --></div>'
    },
    url: 'http://hl7.org/fhir/StructureDefinition/Quantity',
    name: 'Quantity',
    status: 'draft',
    publisher: 'HL7 FHIR Standard',
    contact: [
        {
            telecom: [
                {
                    system: 'other',
                    value: 'http://hl7.org/fhir'
                }
            ]
        }
    ],
    date: '2015-10-24T07:41:03+11:00',
    description: 'Base StructureDefinition for Quantity Type',
    requirements: 'Need to able to capture all sorts of measured values, even if the measured value are not precisely quantified. Values include exact measures such as 3.51g, customary units such as 3 tablets, and currencies such as $100.32USD.',
    fhirVersion: '1.0.2',
    mapping: [
        {
            identity: 'v2',
            uri: 'http://hl7.org/v2',
            name: 'HL7 v2'
        },
        {
            identity: 'rim',
            uri: 'http://hl7.org/v3',
            name: 'RIM'
        }
    ],
    kind: 'datatype',
    abstract: false,
    base: 'http://hl7.org/fhir/StructureDefinition/Element',
    snapshot: {
        element: [
            {
                path: 'Quantity',
                short: 'A measured or measurable amount',
                definition: 'A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.',
                comments: 'The context of use may frequently define what kind of quantity this is and therefore what kind of units can be used. The context of use may also restrict the values for the comparator.',
                min: 0,
                max: '*',
                type: [
                    {
                        code: 'Element'
                    }
                ],
                constraint: [
                    {
                        key: 'qty-3',
                        severity: 'error',
                        human: 'If a code for the unit is present, the system SHALL also be present',
                        xpath: 'not(exists(f:code)) or exists(f:system)'
                    }
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: 'SN (see also Range) or CQ'
                    },
                    {
                        identity: 'rim',
                        map: 'PQ, IVL<PQ>, MO, CO, depending on the values'
                    }
                ]
            },
            {
                path: 'Quantity.id',
                representation: [
                    'xmlAttr'
                ],
                short: 'xml:id (or equivalent in JSON)',
                definition: 'unique id for the element within a resource (for internal references).',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'id'
                    }
                ],
                mapping: [
                    {
                        identity: 'rim',
                        map: 'n/a'
                    }
                ]
            },
            {
                path: 'Quantity.extension',
                short: 'Additional Content defined by implementations',
                definition: 'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
                comments: 'There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.',
                alias: [
                    'extensions',
                    'user content'
                ],
                min: 0,
                max: '*',
                type: [
                    {
                        code: 'Extension'
                    }
                ],
                mapping: [
                    {
                        identity: 'rim',
                        map: 'n/a'
                    }
                ]
            },
            {
                path: 'Quantity.value',
                short: 'Numerical value (with implicit precision)',
                definition: 'The value of the measured amount. The value includes an implicit precision in the presentation of the value.',
                comments: 'The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).',
                requirements: 'Precision is handled implicitly in almost all cases of measurement.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'decimal'
                    }
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: 'SN.2  / CQ - N/A'
                    },
                    {
                        identity: 'rim',
                        map: 'PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value'
                    }
                ]
            },
            {
                path: 'Quantity.comparator',
                short: '< | <= | >= | > - how to understand the value',
                definition: 'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \'<\' , then the real value is < stated value.',
                comments: 'This is labeled as \'Is Modifier\' because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value.',
                requirements: 'Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'code'
                    }
                ],
                meaningWhenMissing: 'If there is no comparator, then there is no modification of the value',
                isModifier: true,
                isSummary: true,
                binding: {
                    strength: 'required',
                    description: 'How the Quantity should be understood and represented.',
                    valueSetReference: {
                        reference: 'http://hl7.org/fhir/ValueSet/quantity-comparator'
                    }
                },
                mapping: [
                    {
                        identity: 'v2',
                        map: 'SN.1  / CQ.1'
                    },
                    {
                        identity: 'rim',
                        map: 'IVL properties'
                    }
                ]
            },
            {
                path: 'Quantity.unit',
                short: 'Unit representation',
                definition: 'A human-readable form of the unit.',
                requirements: 'There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'string'
                    }
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: '(see OBX.6 etc.) / CQ.2'
                    },
                    {
                        identity: 'rim',
                        map: 'PQ.unit'
                    }
                ]
            },
            {
                path: 'Quantity.system',
                short: 'System that defines coded unit form',
                definition: 'The identification of the system that provides the coded form of the unit.',
                requirements: 'Need to know the system that defines the coded form of the unit.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'uri'
                    }
                ],
                condition: [
                    'qty-3'
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: '(see OBX.6 etc.) / CQ.2'
                    },
                    {
                        identity: 'rim',
                        map: 'CO.codeSystem, PQ.translation.codeSystem'
                    }
                ]
            },
            {
                path: 'Quantity.code',
                short: 'Coded form of the unit',
                definition: 'A computer processable form of the unit in some unit representation system.',
                comments: 'The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.',
                requirements: 'Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'code'
                    }
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: '(see OBX.6 etc.) / CQ.2'
                    },
                    {
                        identity: 'rim',
                        map: 'PQ.code, MO.currency, PQ.translation.code'
                    }
                ]
            }
        ]
    },
    differential: {
        element: [
            {
                path: 'Quantity',
                short: 'A measured or measurable amount',
                definition: 'A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.',
                comments: 'The context of use may frequently define what kind of quantity this is and therefore what kind of units can be used. The context of use may also restrict the values for the comparator.',
                min: 0,
                max: '*',
                type: [
                    {
                        code: 'Element'
                    }
                ],
                constraint: [
                    {
                        key: 'qty-3',
                        severity: 'error',
                        human: 'If a code for the unit is present, the system SHALL also be present',
                        xpath: 'not(exists(f:code)) or exists(f:system)'
                    }
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: 'SN (see also Range) or CQ'
                    },
                    {
                        identity: 'rim',
                        map: 'PQ, IVL<PQ>, MO, CO, depending on the values'
                    }
                ]
            },
            {
                path: 'Quantity.value',
                short: 'Numerical value (with implicit precision)',
                definition: 'The value of the measured amount. The value includes an implicit precision in the presentation of the value.',
                comments: 'The implicit precision in the value should always be honored. Monetary values have their own rules for handling precision (refer to standard accounting text books).',
                requirements: 'Precision is handled implicitly in almost all cases of measurement.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'decimal'
                    }
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: 'SN.2  / CQ - N/A'
                    },
                    {
                        identity: 'rim',
                        map: 'PQ.value, CO.value, MO.value, IVL.high or IVL.low depending on the value'
                    }
                ]
            },
            {
                path: 'Quantity.comparator',
                short: '< | <= | >= | > - how to understand the value',
                definition: 'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is \'<\' , then the real value is < stated value.',
                comments: 'This is labeled as \'Is Modifier\' because the comparator modifies the interpretation of the value significantly. If there is no comparator, then there is no modification of the value.',
                requirements: 'Need a framework for handling measures where the value is <5ug/L or >400mg/L due to the limitations of measuring methodology.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'code'
                    }
                ],
                meaningWhenMissing: 'If there is no comparator, then there is no modification of the value',
                isModifier: true,
                isSummary: true,
                binding: {
                    strength: 'required',
                    description: 'How the Quantity should be understood and represented.',
                    valueSetReference: {
                        reference: 'http://hl7.org/fhir/ValueSet/quantity-comparator'
                    }
                },
                mapping: [
                    {
                        identity: 'v2',
                        map: 'SN.1  / CQ.1'
                    },
                    {
                        identity: 'rim',
                        map: 'IVL properties'
                    }
                ]
            },
            {
                path: 'Quantity.unit',
                short: 'Unit representation',
                definition: 'A human-readable form of the unit.',
                requirements: 'There are many representations for units of measure and in many contexts, particular representations are fixed and required. I.e. mcg for micrograms.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'string'
                    }
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: '(see OBX.6 etc.) / CQ.2'
                    },
                    {
                        identity: 'rim',
                        map: 'PQ.unit'
                    }
                ]
            },
            {
                path: 'Quantity.system',
                short: 'System that defines coded unit form',
                definition: 'The identification of the system that provides the coded form of the unit.',
                requirements: 'Need to know the system that defines the coded form of the unit.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'uri'
                    }
                ],
                condition: [
                    'qty-3'
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: '(see OBX.6 etc.) / CQ.2'
                    },
                    {
                        identity: 'rim',
                        map: 'CO.codeSystem, PQ.translation.codeSystem'
                    }
                ]
            },
            {
                path: 'Quantity.code',
                short: 'Coded form of the unit',
                definition: 'A computer processable form of the unit in some unit representation system.',
                comments: 'The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.',
                requirements: 'Need a computable form of the unit that is fixed across all forms. UCUM provides this for quantities, but SNOMED CT provides many units of interest.',
                min: 0,
                max: '1',
                type: [
                    {
                        code: 'code'
                    }
                ],
                isSummary: true,
                mapping: [
                    {
                        identity: 'v2',
                        map: '(see OBX.6 etc.) / CQ.2'
                    },
                    {
                        identity: 'rim',
                        map: 'PQ.code, MO.currency, PQ.translation.code'
                    }
                ]
            }
        ]
    }
};
