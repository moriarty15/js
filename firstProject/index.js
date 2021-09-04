console.log('hi')
const isOdd = require('is-odd');
const odd = (num) => {
    if (isOdd(num)) {
        console.log('нечётное');
    }
    else {console.log('четное')}
}

const newTmp = 4;
const newArray = [3, 4, 5, 6, 7];

module.exports = {odd, newArray, newTmp}