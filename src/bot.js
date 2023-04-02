const fs = require('fs');
const Twit = require('twit');
const config = require('./config.js');
const twit = new Twit(config);
const images = require('./buildImages.js');


setInterval(() => tweetIt(), 86400 * 1000);

function tweetIt() {
	let tweet = getImage(images);

	isTweeted(tweet)
		.then((alreadyTweeted) => {
			if (alreadyTweeted) {
				console.log('Already tweeted');
				return
			} else {
				console.log(tweet);
				twit.post('statuses/update', { status: tweet }, tweeted);
				saveTweetedImage(tweet);
			}
		})
		.catch((err) => {
			console.error(err);
		});

	function tweeted(err, data, response) {
		if (err) {
			console.log(err);
		} else {
			console.log('Tweeted!');
		}
	}
}

function getImage(images) {
	let randomPosition = Math.floor(Math.random() * images.length);
	let randomImg = images[randomPosition];

	return randomImg;
}

function daysInterval(min, max) {
	let daysInterval = Math.floor(Math.random() * (max - min + 1) + min);
	return 1000 * (86400 * daysInterval); // 24h = 86400secs
}

function saveTweetedImage(tweet) {
	//keep all tweeted images
	fs.readFile('texts/alreadyTweeted.json', 'utf-8', (err, data) => {
		if (err) {
			console.log('jkn');
			console.error(err);
			return;
		}

		let alreadyTweeted = [];

		if (data) {
			alreadyTweeted = JSON.parse(data);
		}
		
		alreadyTweeted.push(tweet);

		fs.writeFile('texts/alreadyTweeted.json', JSON.stringify(alreadyTweeted, null, 2), 'utf-8', (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('Twit has been saved');
		});
	});
}


function isTweeted(tweet) {
	return new Promise((resolve, reject) => {
		fs.readFile('texts/alreadyTweeted.json', 'utf-8', (err, data) => {
			if (err) {
				console.error(err);
				reject(err);
				return;
			}

			let twits = [];
			if (data) {
				twits = JSON.parse(data);
			}

			const alreadyTweeted = twits.includes(tweet);

			resolve(alreadyTweeted);
		});
	});
}