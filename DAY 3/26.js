//write a js program to sort a given set in ascending order by removing the duplicate

let a=[22,44,88,22,44,11,9];
for (var i = 1; i < a.length; i++)
    for (var j = 0; j < i; j++)
        if (a[i] < a[j]) {
            var x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
let b=new Set(a);
let c=[b]
console.log(c);