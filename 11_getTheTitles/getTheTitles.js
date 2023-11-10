const getTheTitles = function(booksarray) {
    let titlearray = [];
    for(let i = 0;i<booksarray.length;++i){
        titlearray.push(booksarray[i].title);
    }
    return titlearray;

};

// Do not edit below this line
module.exports = getTheTitles;
