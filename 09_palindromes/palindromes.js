const palindromes = function (string) {
    // remove punctuation and space from string
    string = string.replace(/[!"#$%&'()" "*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    // make string lowercase to make it case-insensitive
    string = string.toLowerCase();
    let i = 0;
    let j = string.length - 1;
    for(;i<string.length && j>=0;++i,j--){
        if(string[i]!=string[j]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
