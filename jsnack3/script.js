// JSnack 3
// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
let errorFound = false;

for (let i = 0; i < 10; i++) {
  const num = parseFloat(prompt(`Inserisci il numero [${i + 1}]:`));

  if (!isNaN(num)) {
    sum += num;
  } else {
    errorFound = true;
    break;
  }
}

errorFound === false
  ? console.log(`Il risultato della somma è ${sum}`)
  : console.log(`Errore`);

