//JAVASCRIPT ARRAYS

//push()
var a = ["Banana", "Orange", "Apple", "Mango"];
a.push("Kiwi");
console.log(a);

//pop()
var a= ["Banana", "Orange", "Apple", "Mango"];
a.pop();
console.log(a);

//shift()
var a= ["Banana", "Orange", "Apple", "Mango"];
a.shift();
console.log(a);

//unshift()
var a=["Banana", "Orange", "Apple", "Mango"];
a.unshift("Banana","Apple");
console.log(a);

//slice()
var a=["Banana", "Orange", "Apple", "Mango"];
var citrus=a.slice(1,3);
console.log(citrus);

//concat()
var arr1=["Obsi"];
var arr2=["dian"];
var result=arr1.concat(arr2);
console.log(result);

//indexOf()
var a = "My name is Ambady"
var b=a.indexOf("is");
console.log(b);