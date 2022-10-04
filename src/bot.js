const config = require('./config.js');
const Twit = require('twit');
const twit = new Twit(config);
const sentences = require('./buildSentences');

setInterval(() => tweetIt(sentences), 3600000 * 24); 

function tweetIt() 
{
    let tweet =  createTweet(sentences);

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

function createTweet(sentences) 
{
    let randomPosition = Math.floor(Math.random() * sentences.length);
    let tweet = { status: sentences[randomPosition] };

    return tweet;
}

function daysInterval(min, max) 
{
    let daysInterval = Math.floor(Math.random() * (max - min + 1) + min);
    return 1000 * (86400 * daysInterval); // 24h = 86400secs
}
