// Creo un array vuoto che conterrà i numeri digitati dall'utente
const numbers = [];
console.log(numbers);


// Finche la lunghezza dell'array non è 6, chiederò all'utente di inserire un numero 
while (numbers.length !== 6) 
{
    // Chiedo all'utente di inserire un numero
    const userNumber = parseInt(prompt("Digita un numero"));
    console.log(userNumber);
}
console.log(numbers);
