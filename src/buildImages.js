const fs = require("fs");
let allImages;
let sentences;

try {
	const text = getText();
	sentences = findSentences(text);
	allImages = createImages(sentences);
} catch (err) {
	console.error(err);
}

function getText() {
	let text = fs.readFileSync('texts/textFromPdf.txt', 'utf8');
	text = text.replace(/(\r\n|\n|\r)/gm, " ");

	return text;
}


function findSentences(text) {
	let sentences = [];
	const pattern = '\\b(de|del)\\s([a-záéíóúñ])+\\s([a-záéíóúñ])+';

	let matchedSentences = text.match(new RegExp(pattern, 'g'));
	for (let i = 0; i < matchedSentences.length; i++) {
		let sentence = matchedSentences[i];

		let sentenceSplit = sentence.split(' ');

		let deOrDel = sentenceSplit[0];
		let secondWord = sentenceSplit[1];
		let thirdWord = sentenceSplit[2];

		const notAllowedLastWords = [
			"un",
			"una",
			"unos",
			"unas",
			"la",
			"el",
			"lo",
			"los",
			"las",
			"tu",
			"mi",
			"su",
			"tus",
			"mis",
			"sus",
			"este",
			"esta",
			"esto",
			"estas",
			"estos",
			"esa",
			"ese",
			"esas",
			"esos",
			"aquel",
			"aquella",
			"aquellos",
			"aquellas",
			"que",
			"tan",
			"sí",
			"si",
			"no",
			"cada"

		];

		if (notAllowedLastWords.includes(secondWord)) {
			if (!sentences.includes(sentence)) {
				sentences.push(sentence);
			}
		} else {
			sentence = deOrDel + ' ' + secondWord;
			if (!sentences.includes(sentence)) {
				sentences.push(sentence);
			}
		}
	}
	return sentences;
}

function createImages(sentences) {
	const unaImagen = 'Una imagen';
	let allImages = [];

	for (let sentence of sentences) {
		let unaImagenSentence = unaImagen.concat(' ', sentence);
		allImages.push(unaImagenSentence);
	}
	console.log(allImages[4]);
	return allImages;
}

module.exports = allImages;
