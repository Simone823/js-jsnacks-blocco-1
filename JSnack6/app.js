// Creo un array vuoto che conterrà il numero inserito dall'utente
const number = [];
console.log(number);

// Finche la lunghezza del mio array number è 0, chiederò all'utente di inserire un numero
while (number.length !== 1) {

    // Chiedo all'utente di inserire un numero
    const numberUser = parseInt(prompt("Digita un numero"));
    console.log(numberUser);

    // Se l'utente non inserisce un numero, quindi una stringa
    if (isNaN(numberUser)){

        // Alert carattere non valido, inserisci un numero
        alert("Carattere inserito non valido. Digita un numero!");
    } // Altrimenti aggiungo il numero inserito nel mio array number
      else {
        number.push(numberUser);
    }

}
console.log(number);