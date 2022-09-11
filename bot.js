const config = require('./config.js');
const Twit = require('twit');
const twit = new Twit(config);
const allImagesSentences = require('./buildSentences');

let randomPosition = Math.floor(Math.random() * allImagesSentences.length);
let tweet = { status: allImagesSentences[randomPosition] };

setInterval(() => tweetIt(tweet), daysInterval(2,3)); 

//tweetIt(tweet);

function tweetIt(tweet) 
{
    twit.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) 
    {
        if (err) {
            console.log(err);
        } else {
            console.log('Tweeted!');
        }
    }
}

function daysInterval(min, max) 
{
    let daysInterval = Math.floor(Math.random() * (max - min + 1) + min);
    return 1000 * (86400 * daysInterval); // 24h = 86400secs
}
