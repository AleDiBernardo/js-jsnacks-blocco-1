// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Inserisci la prima parola");
const secWord = prompt("Inserisci la seconda parola");

if (firstWord.length > secWord.length) {
  alert(secWord + " " + firstWord);
} else if (firstWord.length < secWord.length) {
  alert(firstWord + " " + secWord);
} else {
  alert("Stessa lunghezza " + firstWord + " " + secWord);
}
