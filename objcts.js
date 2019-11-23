for(i=1; i<=15;i++){
let k = i;
let j = k*k;
let numbers ={
[k] : [j],
}
for(i in numbers){
  console.log(i + ": " + numbers[i])
}}
