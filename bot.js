const allImagesSentences = require('./buildSentences');

let randomPosition = Math.floor(Math.random() * allImagesSentences.length);
console.log(allImagesSentences[randomPosition]);
