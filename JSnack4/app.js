// Creo la lista delle persone invitate alla festa
const guestList = ["Paolo", "Luca", "Gigi", "Mario", "Francesco"];
console.log(guestList); 


// Creo una varibile per la verifica del nome 
var guestCheck;
console.log(guestCheck);

// Chiedo all'utente il suo nome
let userName =  prompt("Come ti chiami").trim();
console.log(userName);


// Ciclo for guestList
for (let i = 0; i < guestList.length; i++){
   
    console.log(guestList[i]);

    guestCheck = guestList[i];
    console.log(guestCheck);

    // Se il nome inserito dall'utente è in lista guestList allora può partecipare alla festa
    if (userName == guestCheck){
        console.log("Puoi partecipare alla festa");
        alert("Puoi partecipare alla festa");
        break;
    } 

}


// Se l'utente non è in lista non potrà partecipare alla festa 
if(userName != guestCheck){
    console.log("Non puoi partecipare alla festa");
    alert("Non puoi partecipare alla festa");
} 