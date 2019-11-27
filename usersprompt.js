
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function enterYear(number) {
    if(number<18){
console.log('User is a child');
} 
else if(number<36){
console.log('User is a youth')
} 
else{
console.log('User is an adult')
}  
}

rl.question('What is your Year of Birth?: ', function (x) {
          var sum = 2019 - parseInt(x);

        enterYear(sum)
  rl.close();
});
 