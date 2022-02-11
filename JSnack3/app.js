// Creo un array contenete i numeri digitati dall'utente
const numbers = [];
console.log(numbers);


// Fino a che la lunghezza dell'array non è 5, chiederò all'utente un numero
while (numbers.length !== 5){

   // Chiedo all'utente un numero  
   const numbersUser = parseInt(prompt("digita un numero!"));

   // Se l'utente digita un numero, aggiungo il numero dentro l'array numbers
   if (!isNaN(numbersUser)){
       numbers.push(numbersUser);
   }
}
console.log(numbers);



