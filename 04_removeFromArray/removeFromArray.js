const removeFromArray = function(array,...stuffToBeRemoved) {
    let numberOfItemsToBeRemoved = stuffToBeRemoved.length;
    for(let i=0;i<numberOfItemsToBeRemoved;i++){
        let index = array.indexOf(stuffToBeRemoved[i]);
        if(index > -1){
            array.splice(index,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
