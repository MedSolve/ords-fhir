import {Valueset} from 'ts-objectschema';

export class AddressUse {
    public codeSystem: Object = {
        concept: [
            {
                abstract: true,
                code: 'home',
                display: 'string'
            },
            {
                abstract: true,
                code: 'work',
                display: 'string'
            },
            {
                abstract: true,
                code: 'temp',
                display: 'string'
            },
            {
                abstract: true,
                code: 'old',
                display: 'string'
            },
        ],
        system: process.env.domain + '/ValueSet/AddressUse',
        version: '1.0.0'
    };
}

export const addressUse: AddressUse = new Valueset(new AddressUse());