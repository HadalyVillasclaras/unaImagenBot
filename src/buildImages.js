const fs = require("fs");
let allImages = [];

try {
	const text = getText();
	const sentences = findSentences(text);
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
	// const pattern = '\\b(de|del)\\s([a-záéíóúñ])+\\s([a-záéíóúñ])+';
	const pattern = '\\b(de|del)\\s+([a-záéíóúñ]+(?:\\s+[a-záéíóúñ]+)*)(?=[\\s.,;:()¿?¡!-])';
	let matchedSentences = text.match(new RegExp(pattern, 'g'));

	const filteredMatchedSentences = matchedSentences.filter(sentence => sentence.length <= 110);

	const notAllowedLastWords = [
		"para",
		"y",
		"a",
		"de",
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

	const sentences = filteredMatchedSentences.reduce((acc, sentence2) => {
		let words = sentence2.split(" ");

		while(notAllowedLastWords.includes(words[words.length - 1])) {
			words.pop()
		}

		const newSentence = words.join(" ");
		if (newSentence !== ""){
			acc.push(newSentence);
		}
		return acc;
	}, []);


	return sentences;
}

function createImages(sentences) {
	const unaImagen = 'Una imagen';
	let allImages = [];

	for (let sentence of sentences) {
		let unaImagenSentence = unaImagen.concat(' ', sentence);
		allImages.push(unaImagenSentence);
	}
	return allImages;
}

module.exports = allImages;
