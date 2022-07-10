// ex 1

a= true;
b = false;

function trueOrFalse(a, b) {
if (a && b)
return false;
if (a && a)
return true;
if (b && a)
return false;
else return false;
}


// ex 2

function matchHouses(step) {
    if (step==0) {return 0;}    
    return step * 5 + 1;
}

console.log(matchHouses(0));
console.log(matchHouses(1));

// ex 3

function perimeter(l, num) {
   return  l == "s" ? num * 4
         : l == "c" ? num * 6.28
         : undefined
}

console.log(perimeter("s", 7)); 
console.log(perimeter("c", 4)); 
console.log(perimeter("a", 9)); 


// ex 4.1

function dolar(d) {
    for (var i = 0; i <= d; i++) {
       console.log("$".repeat(i));
    }
}
dolar(5);


// ex 4.2

for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


// optional ex 4.1.1

function fun(n) {
    for (var i = 0; i < n; i++) {
        var spaces = n-i-1;
        console.log(" ".repeat(spaces).concat("*".repeat(i).concat("*").concat("*".repeat(i))))
    }
    console.log(" ".repeat(n-1).concat("*"))
}
fun(5);


