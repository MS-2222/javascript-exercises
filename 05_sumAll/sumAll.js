const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    
    if (num1 > num2) {
        let newNum1 = num2;
        let newNum2 = num1;
        let total = 0;
        for (let i = newNum1; i < newNum2+1; i++) {
            total += i;
        }
        return total;
    }
    else {
        let total = 0;
        for (let i = num1; i < num2+1; i++) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
