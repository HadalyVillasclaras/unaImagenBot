const text = require('./text');
let sentences = createSentences(text);

function unaImagenAllSentences(sentences){
    let unaImagen = 'Una imagen';
    let unaImagenSentences = [];

    for (const sentence of sentences) {
        let unaImagenSentence = unaImagen.concat(' ', sentence);
        unaImagenSentences.push(unaImagenSentence);
    }
    return unaImagenSentences;
}

function createSentences(text)
{
    let sentences = [];
    const pattern = '\\b(de|del)\\s([a-záéíóúñ])+\\s([a-záéíóúñ])+';
    let matchedSentences = text.match(new RegExp(pattern, 'g'));

    for (let i = 0; i < matchedSentences.length; i++) {
        let sentence = matchedSentences[i];

        let sentenceSplit = sentence.split(' ');
        let lastPosition = sentenceSplit.length-1;
        let secondWord = sentenceSplit[1];
        let thirdWord = sentenceSplit[2];

        const notAllowedSecondWords = [
            "un", 
            "una", 
            "unos", 
            "unas", 
            "la", 
            "el", 
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
            "que"
        ];

        if (notAllowedSecondWords.includes(secondWord)) {
            sentences.push(sentence);
        }else{
            let twoWordsSentence = sentence.slice(0, (sentence.indexOf(thirdWord) -1));
            sentences.push(twoWordsSentence);
        }
    }
    return sentences;
}



module.exports = unaImagenAllSentences(sentences);