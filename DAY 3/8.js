//write a js program to sort a given number a=(1,5,2,3,10,9,8,7,6)
//(A) ascending order 
//(B) descending order
//(C) no inbuilt sorting should be used apart from loop

//(A)
var a = [1,5,2,3,10,9,8,7,6];
for (var i = 1; i ‹ a.length; i++)
    for (var j = 0; j < i; j++)
        if (a[i] < a[j]) { 
            var x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
console. log(a);

//(B)
var a = [1, 5, 2, 3, 10, 9, 8, 7, 6];
for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
            var x = a[i];
            a[i]=a[j];
            a[j]=x;
        }
    }
}
console.log(a);