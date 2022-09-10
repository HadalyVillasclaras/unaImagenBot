
const config = require('./config.js');
const Twit = require('twit');
const twit = new Twit(config);
const allImagesSentences = require('./buildSentences');

let randomPosition = Math.floor(Math.random() * allImagesSentences.length);
let tweet = { status: allImagesSentences[randomPosition] };

setInterval(tweetIt(tweet), 1000 * (86400 * daysInterval(2, 3))); // 24h = 86400secs


function tweetIt(tweet) 
{
    twit.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) 
    {
        if (err) {
            console.log(err);
        } else {
            console.log('Tweeted twit: ' + data);
        }
    }
}

function daysInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
