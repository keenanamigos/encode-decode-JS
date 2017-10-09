function getIntermediateDecimalValue(integer) {
    if (integer >= -8192 || integer <= 8191) {
        const fourteenBitUpperBound = 8192;

        let intermediateDecimalValue = integer + fourteenBitUpperBound;

        if (intermediateDecimalValue >= 0 && intermediateDecimalValue <= 16383) {
            return intermediateDecimalValue;
        }
    }
}

function getIntermediateHexValue(integer) {
    return integer.toString(16);
}

function getEncodedHexValue(hexString) {
    console.log("NOT IMPLEMENTED");
}

// convertIntToTextEncoding [retuns a 4 character string]
    // 8912 is added to EVERY integer passed in
    // parseInt && !isNaN to check

// Decode
function convertIntermediateDecimalToUnencodedDecimal(integer) {
    if (integer >= 0 && integer <= 16383) {
        const fourteenBitUpperBound = 8192;

        return (integer - fourteenBitUpperBound);
     }
}

function convertIntermediateHexToIntermediateDecimal(string) {
    return parseInt(string, 16);
}

function convertEncodedHexToIntermediateHex(string) {
    console.log("NOT IMPLEMENTED");
}

module.exports = {
    getIntermediateDecimalValue: getIntermediateDecimalValue,
    getIntermediateHexValue: getIntermediateHexValue,
    getEncodedHexValue: getEncodedHexValue,
    convertIntermediateDecimalToUnencodedDecimal: convertIntermediateDecimalToUnencodedDecimal,
    convertIntermediateHexToIntermediateDecimal: convertIntermediateHexToIntermediateDecimal,
    convertEncodedHexToIntermediateHex: convertEncodedHexToIntermediateHex
};