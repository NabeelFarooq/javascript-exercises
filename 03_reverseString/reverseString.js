const reverseString = function(inputStringToBeReversed) {
    let temporaryString = '';
    for(let i=inputStringToBeReversed.length-1;i>=0;--i){
        temporaryString += inputStringToBeReversed[i];
    }
    return temporaryString;
};

// Do not edit below this line
module.exports = reverseString;
