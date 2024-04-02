// JSnack 9
// Calcola la somma e la media dei primi 10 numeri.

let sum = 0, average = 0;

for (let i = 1; i <= 10; i++) {
  let num = i;
  sum += num;
  average = sum / i;

}

console.log(`Somma: ${sum}\nMedia: ${average}`);