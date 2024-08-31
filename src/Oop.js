

//* Object Method 
const person = {

    fname : "Jhon Mark",
    lname: "Malupa",
    age: 21,
    online: true

}

//* Get object 

document.getElementById("dem1").innerHTML = person.fname ;


//* Display whole Object using loop- For loop

let display = ""

for(key, values in person){
    display += "<p>key</p>, <li>values</li>" ;
}