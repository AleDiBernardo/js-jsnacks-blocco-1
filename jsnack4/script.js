// JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
// no alla festa.

const partecipants = ["Aldo", "Giovanni", "Giacomo"];
const userName = prompt("Inserisci il tuo nome: ");
let isOnList = false;

for (let i = 0; i < partecipants.length; i++) {

  if (userName === partecipants[i]) {
    isOnList = true;
  }
}

isOnList
  ? alert("Da questa parte prego")
  : alert("Mi spiace, non sei sulla lista");
