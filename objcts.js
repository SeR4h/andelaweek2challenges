let numbers = {}

for (var number = 1; number <= 15; number++) {
  var myKey = number
  var myValue = number ** 2
  numbers[myKey] = myValue

}

console.log(numbers)