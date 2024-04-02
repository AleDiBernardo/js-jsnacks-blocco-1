// JSnack 6
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.

const squares = [];
const userNum = parseInt(prompt("Inserisci un numero: "));
let errorFound = false;

for (let i = 0; i < userNum; i++) {
  if (!isNaN(userNum)) {
    // squares[i] = (i + 1) ** 2;
    num = i;
    num++;
    squares[i] = Math.pow(num, 2);
  }
}

errorFound
  ? console.log("Error")
  : console.log(`Array di quadrati: [${squares}]`);
