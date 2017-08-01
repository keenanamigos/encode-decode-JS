var expect = require('chai').expect;

// Sanity check
describe('Mocha', function () {
    it('should run our tests using npm', function () {
        expect(true).to.be.ok;
    });
});

// Encode
describe('getIntermediateDecimalValue', function () {
    const getIntermediateDecimalValue = require('../scripts/scripts').getIntermediateDecimalValue;

    it('should add the integer 8192 to a given parameter', function () {
        let someInteger = 20;

        expect(getIntermediateDecimalValue(20)).to.equal(8212);
    });
});

describe('getIntermediateHexValue', function () {
    const getIntermediateHexValue = require('../scripts/scripts').getIntermediateHexValue;

    it ('should convert the intermediate decimal value into the intermediate hex value', function () {
        let intermediateDecimalValue = 8192;

        expect(getIntermediateHexValue(intermediateDecimalValue)).to.equal('2000');
    });
});

describe('getEncodedHexValue', function () {
    const getEncodedHexValue = require('../scripts/scripts').getEncodedHexValue;

    it ('should convert the intermediate hex value into the encoded hex value', function () {
        let intermediateHexString = "2000";

        expect(getEncodedHexValue(intermediateHexString)).to.equal('4000');
    });
});

// describe('ConvertIntToTextEncoding', function () {
//     it('should convert the integer 8191 into the proper encoded hex value', function () {

//     });
// });

// Decode
describe('convertIntermediateDecimalToUnencodedDecimal', function () {
    const convertIntermediateDecimalToUnencodedDecimal = require('../scripts/scripts').convertIntermediateDecimalToUnencodedDecimal;

    it ('should convert the intermediate decimal value to the unencoded decimal value', function () {
        let intermediateDecimalValue = 8192;

        expect(convertIntermediateDecimalToUnencodedDecimal(intermediateDecimalValue)).to.equal(0);
    });
});

describe('convertIntermediateHexToIntermediateDecimal', function () {
    const convertIntermediateHexToIntermediateDecimal = require('../scripts/scripts').convertIntermediateHexToIntermediateDecimal;

    it ('should convert the intermediate hex value to the proper intermediate decimal value', function () {
        let intermediateHexString = "2000";

        expect(convertIntermediateHexToIntermediateDecimal(intermediateHexString)).to.equal(8192);
    });
});

describe('convertEncodedHexToIntermediateHex', function () {
    const convertEncodedHexToIntermediateHex = require('../scripts/scripts').convertEncodedHexToIntermediateHex;

    it ('should convert the encoded hex value to the proper intermediate hex value', function() {
        let encodedHexString = "7F7F";

        expect(convertEncodedHexToIntermediateHex(encodedHexString)).to.equal("3fff");
    });
});