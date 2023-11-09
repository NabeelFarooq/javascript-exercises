const leapYears = function(inputYearToBeChecked) {
    //Leap years are years divisible by four (like 1984 and 2004). 
    //However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, 
    //which were in fact leap years)
    if(inputYearToBeChecked%4===0 && ((inputYearToBeChecked%400===0 ) || (inputYearToBeChecked%100!==0))){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
