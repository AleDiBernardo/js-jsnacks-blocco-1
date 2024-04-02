// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const firstNum = parseInt(prompt("Inserisci il primo numero"));
const secNum = parseInt(prompt("Inserisci il secondo numero"));

if (!isNaN(firstNum) && !isNaN(secNum)) {
  if (firstNum === secNum) {
    alert("Sono uguali");
  } else if (firstNum > secNum) {
    alert("Maggiore: " + firstNum);
  } else {
    alert("Maggiore: " + secNum);
  }
} else {
  alert("Errore");
}
