// JSnack 7
// Stampa le potenze di 2 fino a 1000.

const powArray = [];

for (let i = 0; i < 1000; i++) {

  let num = i;
  num++;
  
  powArray[i] = Math.pow(num, 2);
}


console.log(`Array di potenze: [${powArray}]`);

