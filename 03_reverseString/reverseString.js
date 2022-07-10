
const reverseString = function(string) {
    let j = -1;
    let new_string = '';
    for (let i = 0; i < (string.length); i++) {
        if (j === -1) {
            new_string += string.slice(j);
            j--;
        }
        else {
            new_string += string.slice(j, j+1);
            j--;
        }

    }
    return new_string;
};

// Do not edit below this line
module.exports = reverseString;
