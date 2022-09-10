const Twit = require('twit');
const config = require('./config.js')
const allImagesSentences = require('./buildSentences');

const twit = new Twit(config);
console.log(config);
let randomPosition = Math.floor(Math.random() * allImagesSentences.length);
console.log(allImagesSentences[randomPosition]);
