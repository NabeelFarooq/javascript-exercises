const findTheOldest = function(peopleArray) {
    const OldestPersonObject = peopleArray.reduce((overAllReturn,currentObject) => {
        if(!currentObject.yearOfDeath){
            let currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            yearOfDeath = currentYear;
        }
        let age = currentObject.yearOfDeath - currentObject.yearOfBirth;
        if(age>(overAllReturn.yearOfDeath-overAllReturn.yearOfBirth)){
            overAllReturn = currentObject;
        }
        return overAllReturn;
    });
    return OldestPersonObject;
}

// Do not edit below this line
module.exports = findTheOldest;
