/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (con i prompt() in questo caso).
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).
Il risultato andrà visualizzato prima in console e poi possibilmente in un apposito elemento <p> del mio codice HTML.*/

function submitForm(event) {
    event.preventDefsult();
}
//chiedere all'utente km che vuole percorrere ed età
let nameandsurname = document.getElementById("nameandsurname").value;
let km = parseInt(document.getElementById("km").value);
let age = parseInt(document.getElementById("age").value);

//impostare la formula per il calcolo base del biglietto e per gli sconti basati sull'età
let ticketprice = (km * 0.21);

if (age >= 65) {
    ticketprice = ticketprice - ((ticketprice / 100) * 40)
} else if (age < 18) {
    ticketprice = ticketprice - ((ticketprice / 100) * 20)
};

ticketprice = ticketprice.toFixed(2);

//stampa risultato in console
console.log(ticketprice);

//stampa risultato in html
document.getElementById("ticketprice").innerHTML = ticketprice;