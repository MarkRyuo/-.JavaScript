
fetch('https://pokeapi.co/api/v2/pokemon/pikachu') 
    .then(response => console,json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

