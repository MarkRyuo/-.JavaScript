

//* Object Method 
let person = {

    fname : "Jhon Mark",
    lname: "Malupa",
    age: 21,
    online: true

}

//* Get object 

document.getElementById("dem1").innerHTML = person.fname ;


//* Display whole Object using loop- For loop

let display = ""

for(let key in person){
    display += `<p>${key}: ${person[key]}</p>` ;
    console.log(di)
}

document.getElementById("demo1").innerHTML = display ;