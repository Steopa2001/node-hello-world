// Dichiaro una variabile chiamata 'sentence' 
let sentence;

// Controllo se è stato passato un argomento dal terminale (process.argv[2])
if (process.argv[2]) {
  // Se c'è un argomento, lo assegno alla variabile 'sentence'
  sentence = process.argv[2];
} else {
  // Altrimenti, uso la frase di default
  sentence = 'Hello boolean';
}

// Stampo la frase finale nel terminale
console.log(sentence);