module.exports = function toReadable(number) {
    let numbers = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',

        toTwenty(strNumber) {
            return numbers[strNumber];
        },

        tens(strNumber) {
            if (strNumber[1] === '0') return numbers[strNumber];
            if (Number(strNumber) > 9 && Number(strNumber) < 20) {
                return numbers.toTwenty(strNumber)
            }
            if (strNumber[0] === '0') return numbers[strNumber[1]];
            return numbers[strNumber[0] + '0'] + ' ' + numbers[strNumber[1]];
        },

        hundreds(strNumber) {
            let tens = (strNumber.slice(1) !== '00') ? ' ' + numbers.tens(strNumber.slice(1)) : '';
            return numbers[strNumber[0]] + ' hundred' + tens;
        }
    };

    if (number <= 20) {
        return numbers.toTwenty(number.toString())
    }

    if (number <= 99) {
        return numbers.tens(number.toString());
    }

    if (number >= 100 && number < 1000) {
        return numbers.hundreds(number.toString());
    } else {
        return number + " - not implemented";
    }

}
