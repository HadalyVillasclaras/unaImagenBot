const Twit = require('twit');
const config = require('./config.js')
const allImagesSentences = require('./buildSentences');

let randomPosition = Math.floor(Math.random() * allImagesSentences.length);

allImagesSentences[randomPosition];
let tweet = { 
    status: 'Una imagen de la credibilidad'
}

const twit = new Twit(config);
twit.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
    if (err) {
        console.log(err);
    } else {
        console.log('Tweeted twit: ' + data);
    }
}
