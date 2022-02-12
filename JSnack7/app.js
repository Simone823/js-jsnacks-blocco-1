// Creo una varibiale numero 2
const numero = 2;
console.log(numero);

for (let i = 1; i <= 1000; i++) {

    // Varibile potenze di 2 fino a 1000
    const potenze = parseFloat(Math.pow(numero, i));
    console.log(potenze, i);

 
}