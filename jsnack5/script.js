// JSnack 5
// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const numbers = [];
let errorFound = false;

for (let i = 0; i < 6; i++) {
  const userNum = parseInt(prompt(`Inserisci il numero [${i + 1}]: `));

  if (!isNaN(userNum)) {
    if (userNum % 2 === 0) {
      numbers.push(userNum);
    }
  } else {
    errorFound = true;
    break;
  }
}

errorFound
  ? console.log("Error")
  : console.log(`Array di numeri pari: [${numbers}]`);
