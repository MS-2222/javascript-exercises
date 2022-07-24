const fibonacci = function fib(num) {
    if(num < 0) {
        let n = 'OOPS';
        return n;
    }

    let n = Math.floor((((1 + Math.sqrt(5)) / 2)**num - ((1 - Math.sqrt(5)) / 2)**num) / (Math.sqrt(5)));
    
    return n;
}


// Do not edit below this line
module.exports = fibonacci;
