const config = require('./config.js');
const Twit = require('twit');
const twit = new Twit(config);
const images = require('./buildImages.js');

// setInterval(() => tweetIt(sentences), 3600000 * 24); 
tweetIt(images);

function tweetIt() {
    let tweet =  getImage();

    console.log(tweet);
    // twit.post('statuses/update', { status: tweet }, tweeted);
    
    // function tweeted(err, data, response) 
    // {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log('Tweeted!');
    //     }
    // }
}

function getImage() {
    let randomPosition = Math.floor(Math.random() * images.length);
    let randomImg = images[randomPosition];

    return randomImg;
}

function daysInterval(min, max) {
    let daysInterval = Math.floor(Math.random() * (max - min + 1) + min);
    return 1000 * (86400 * daysInterval); // 24h = 86400secs
}
