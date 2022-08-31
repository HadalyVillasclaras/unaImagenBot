let text = "ivo del sur ok en una de el tejado casa pequeña pero moderna en el centro de la ciudad. Mi casa tiene dos habitaciones, un baño, una sala de estar, una cocina y una pequeña terraza. Por las tardes el sol calienta la casa durante horas, así que no suele hacer frío.\
Mi parte favorita de la casa es la terraza porque allí puedo disfrutar de las vistas de la ciudad y leer en completo silencio. El baño es pequeño e incómodo pero voy a reformarlo. Cuando vienen mis amigos nos sentamos todos a charlar en la sala de estar.\
Hace cuatro años que vivo en esta casa. del sur  El edificio es moderno y de construcción reciente. Me gusta mucho el exterior, ya que tiene unos colores muy atractivos y buen aspecto.\
Desde que llegué a esta casa vivo solo. El tamaño es perfecto para una persona, pero podría alquilar la segunda habitación a un amigo. No obstante, me gusta vivir solo.\
Estoy contento en esta casa y no pienso irme por ahora. Tengo el espacio necesario para mí y la cocina está muy bien equipada. Me gusta cocinar todo tipo de platos y comer en la sala de estar mientras veo la tele."

let sentences = createSentences(text);

console.log(unaImagenAllSentences(sentences));

function createSentences(text)
{
    let sentences = [];

    const pattern = '\\b(de|del)\\s([A-záéíóúñ])+\\s([A-záéíóúñ])+';
    let matchedSentences = text.match(new RegExp(pattern, 'g'));

    for (let i = 0; i < matchedSentences.length; i++) {
        let sentence = matchedSentences[i];

        let sentenceSplit = sentence.split(' ');
        let lastPosition = sentenceSplit.length-1;
        let secondWord = sentenceSplit[1];
        let thirdWord = sentenceSplit[2];

        if(
            secondWord == "un" ||
            secondWord == "una" ||
            secondWord == "unos" ||
            secondWord == "unas" ||
            secondWord == "la" ||
            secondWord == "el" ||
            secondWord == "los" ||
            secondWord == "las" ||
            secondWord == "tu" ||
            secondWord == "mi" ||
            secondWord == "su" ||
            secondWord == "tus" ||
            secondWord == "mis" ||
            secondWord == "sus" ||
            secondWord == "que"
            ){
                sentences.push(sentence);
            }else{
                let twoWordsSentence = sentence.slice(0, (sentence.indexOf(thirdWord) -1));
                sentences.push(twoWordsSentence);
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