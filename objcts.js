let numbers = {}

for (var number = 1; number <= 15; number++) {
  var myKey = number
  var myKeySquared = number ** 2
  numbers[myKey] = myKeySquared
}

console.log(numbers)