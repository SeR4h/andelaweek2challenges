
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function logAgeGroup(number) {
    if (number < 18) {
        console.log('User is a child');
    }
    else if (number < 36) {
        console.log('User is a youth')
    }
    else {
        console.log('User is an adult')
    }
}

rl.question('What is your Year of Birth?: ', function (x) {
    var year = parseInt(x)
    if (year >= 1900 && year <= 2019) {
        var age = 2019 - year;
        logAgeGroup(age)
    }
    else {
        console.log('Out of range,please enter valid year of bith')
    }
    rl.close();
})
