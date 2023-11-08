const repeatString = function(stringinput,numberOfTimesToRepeatTheString) {
    if(numberOfTimesToRepeatTheString<0){
        return "ERROR";
    }
    let output='';
    for(let i=0;i<numberOfTimesToRepeatTheString;++i){
        output += stringinput;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
