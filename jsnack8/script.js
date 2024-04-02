// JSnack 8
// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

const userInput = prompt("Inserisci un numero composta da 4 cifre");

let sum = 0;
let inputLen = userInput.length;
let errorFound = false;

if (inputLen === 4) {
  for (let i = 0; i < inputLen; i++) {
    sum += parseInt(userInput[i]);
  }
  console.log("ok");
} else {
  errorFound = true;
}

errorFound ? console.log("Error") : console.log(`La somma è ${sum}`);
