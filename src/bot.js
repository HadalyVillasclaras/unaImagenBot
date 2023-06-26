const config = require('./config.js');
const fs = require('fs').promises;
const path = require('path');
const { TwitterApi } = require('twitter-api-v2');
const client = new TwitterApi(config);
const images = require('./buildImages.js');

tweetIt();
setInterval(() => tweetIt(), 43200 * 1000);
async function tweetIt() {
	let tweet = getImage();
	try {
		const alreadyTweeted = await isTweeted(tweet);

		if (alreadyTweeted) {
			console.log('This tweet has already been posted.');
		} else {
			// const response = await client.v2.tweet(tweet);
			console.log(tweet);
			saveTweetedImgs(tweet);
		}

	} catch (err) {
		console.error(err);
	}
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

async function saveTweetedImgs(tweet) {
	const filePath = path.join(__dirname, '../texts/alreadyTweeted.json');
	try {
		const data = await fs.readFile(filePath, 'utf8');
		const tweets = JSON.parse(data);
		tweets.push(tweet);
		await fs.writeFile(filePath, JSON.stringify(tweets, null, 2), 'utf8');
		console.log('Tweet has been saved.');
	} catch (err) {
		console.error(err);
	}
}


async function isTweeted(tweet) {
	const filePath = path.join(__dirname, '../texts/alreadyTweeted.json');
	try {
		const data = await fs.readFile(filePath, 'utf8');
		const tweets = JSON.parse(data);
		return tweets.includes(tweet);
	} catch (err) {
		console.error(err);
	}
	return false;
}