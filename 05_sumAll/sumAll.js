const sumAll = function(start,end) {
    if(typeof(end)!== 'number' || typeof(start)!== 'number'){
        return 'ERROR';
    }
    if(start<0||end<0){
        return 'ERROR';
    }
    
    if(start>end){
        bigger=start;
        smaller=end;
    }else{
        bigger=end;
        smaller=start;
    }

    let sum = 0;
    for(let i=smaller;i<=bigger;i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
