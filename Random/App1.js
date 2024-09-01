

let fname = "Ryoda" ; // * Let can declare again
const age = 21 ; //* const can't declare

//* Control flow and Loops 
let lname = "" ;

for(let x = 0 ; x < fname.length; x++) {
    lname += x 
}
console.log(lname)

//* JavaScript supports different kinds of loops:
/* 
    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true

    for (expression 1; expression 2; expression 3) {
        code block to be executed
}

*/

//* if statement 

if(age > 20) {
    console.log("OLD ENOUGH")
} else {
    console,log("YOUNG")
}
