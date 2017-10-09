var expect = require('chai').expect;

// Sanity check
describe('Mocha', () => {
    it('should run our tests using npm', () => {
        expect(true).to.be.ok;
    });
});

// Encode
describe('getIntermediateDecimalValue', () => {
    const getIntermediateDecimalValue = require('../scripts/scripts').getIntermediateDecimalValue;

    it('should add the integer 8192 to a given parameter', () => {
        let someInteger = 20;

        expect(getIntermediateDecimalValue(20)).to.equal(8212);
    });
});

describe('getIntermediateHexValue', () => {
    const getIntermediateHexValue = require('../scripts/scripts').getIntermediateHexValue;

    it ('should convert the intermediate decimal value into the intermediate hex value', () => {
        let intermediateDecimalValue = 8192;

        expect(getIntermediateHexValue(intermediateDecimalValue)).to.equal('2000');
    });
});

describe('getEncodedHexValue', () => {
    const getEncodedHexValue = require('../scripts/scripts').getEncodedHexValue;

    it ('should convert the intermediate hex value into the encoded hex value', () => {
        let intermediateHexString = "2000";

        expect(getEncodedHexValue(intermediateHexString)).to.equal('4000');
    });
});

// describe('ConvertIntToTextEncoding', () => {
//     it('should convert the integer 8191 into the proper encoded hex value', () => {

//     });
// });

// Decode
describe('convertIntermediateDecimalToUnencodedDecimal', () => {
    const convertIntermediateDecimalToUnencodedDecimal = require('../scripts/scripts').convertIntermediateDecimalToUnencodedDecimal;

    it ('should convert the intermediate decimal value to the unencoded decimal value', () => {
        let intermediateDecimalValue = 8192;

        expect(convertIntermediateDecimalToUnencodedDecimal(intermediateDecimalValue)).to.equal(0);
    });
});

describe('convertIntermediateHexToIntermediateDecimal', () => {
    const convertIntermediateHexToIntermediateDecimal = require('../scripts/scripts').convertIntermediateHexToIntermediateDecimal;

    it ('should convert the intermediate hex value to the proper intermediate decimal value', () => {
        let intermediateHexString = "2000";

        expect(convertIntermediateHexToIntermediateDecimal(intermediateHexString)).to.equal(8192);
    });
});

describe('convertEncodedHexToIntermediateHex', () => {
    const convertEncodedHexToIntermediateHex = require('../scripts/scripts').convertEncodedHexToIntermediateHex;

    it ('should convert the encoded hex value to the proper intermediate hex value', function() {
        let encodedHexString = "7F7F";

        expect(convertEncodedHexToIntermediateHex(encodedHexString)).to.equal("3fff");
    });
});