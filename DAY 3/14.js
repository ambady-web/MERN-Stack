//write a js program to print the fibanocci series till n term

var number = 2;
var fact = 1;

for (var i = 1; i <= number; i++){
    fact *= i;
}

console.log("fact of " + number + " is " + fact);