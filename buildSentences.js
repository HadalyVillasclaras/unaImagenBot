const fs = require("fs");
let text;
let allImagesSentences;
let sentences;
try {
    text = fs.readFileSync('texts/textFromPdf.txt', 'utf8');
    text = text.replace(/(\r\n|\n|\r)/gm, " ");
    sentences = findSentences(text);
    allImagesSentences = unaImagenAllSentences(sentences);
}catch (err) {
    console.error(err);
}

function findSentences(text)
{
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
            sentences.push(sentence);
        }else{
            sentence = deOrDel + ' ' + secondWord;
            sentences.push(sentence);
        }
    }
    return sentences;
}

function unaImagenAllSentences(sentences){
    let unaImagen = 'Una imagen';
    let unaImagenSentences = [];

    for (const sentence of sentences) {
        let unaImagenSentence = unaImagen.concat(' ', sentence);
        unaImagenSentences.push(unaImagenSentence);
    }
    return unaImagenSentences;
}

module.exports = allImagesSentences;
