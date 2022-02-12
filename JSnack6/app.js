// Creo un array vuoto che conterrà il numero inserito dall'utente
const number = [];
console.log(number);

let numberUser;

// Finche la lunghezza del mio array number è 0, chiederò all'utente di inserire un numero
while (number.length !== 1) {

    // Chiedo all'utente di inserire un numero
    numberUser = parseInt(prompt("Digita un numero"));
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

// Recupero div container dal dom
const containerHtml = document.querySelector(".container");
console.log(containerHtml);

for (let i = 1; i <= numberUser; i++) {

    const cubeNumbers = i ** 3;
    console.log(cubeNumbers);

    // Creo un div contenente il cubo dei primi N inseriti dall'utente
    const divCube = document.createElement("div");
    divCube.classList.add(`cube${i}-${numberUser}`);
    console.log(divCube);

    // Appendo il mio divcube dentro containerHtml
    containerHtml.append(divCube);

    // Inserisco all'interno di divcube il cubo dei primi numeri inseriti
    divCube.append(cubeNumbers);
    console.log(divCube);
}
console.log(containerHtml);