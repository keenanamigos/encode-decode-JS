function getIntermediateDecimalValue(integer) {
    if (integer >= -8192 || integer <= 8191) {
        const fourteenBitUpperBound = 8192;

        let intermediateDecimalValue = integer + fourteenBitUpperBound;

        if (intermediateDecimalValue >= 0 && intermediateDecimalValue <= 16383) {
            return intermediateDecimalValue;
        }
    }
}
module.exports.getIntermediateDecimalValue = getIntermediateDecimalValue;

function getIntermediateHexValue(integer) {
    return integer.toString(16);
}
module.exports.getIntermediateHexValue = getIntermediateHexValue;

function getEncodedHexValue(hexString) {

}
module.exports.getEncodedHexValue = getEncodedHexValue;

// convertIntToTextEncoding [retuns a 4 character string]
    // 8912 is added to EVERY integer passed in
    // parseInt && !isNaN to check

// Decode
function convertIntermediateDecimalToUnencodedDecimal(integer) {
    if (integer >= 0 && integer <= 16383) {
        const fourteenBitUpperBound = 8192;

        return integer - fourteenBitUpperBound;
     }
}
module.exports.convertIntermediateDecimalToUnencodedDecimal = convertIntermediateDecimalToUnencodedDecimal;

function convertIntermediateHexToIntermediateDecimal(string) {
    return parseInt(string, 16);
}
module.exports.convertIntermediateHexToIntermediateDecimal = convertIntermediateHexToIntermediateDecimal;

function convertEncodedHexToIntermediateHex(string) {

}
module.exports.convertEncodedHexToIntermediateHex = convertEncodedHexToIntermediateHex;