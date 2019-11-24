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
    if (year >= 1900) {
        var age = 2019 - year;
    }
    else {
        rl.close();
        return console.log('Out of Range,please enter valid year of birth')

    }
    logAgeGroup(age)
    rl.close();
});