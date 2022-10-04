const pdfUtil = require('pdf-to-text');
const fs = require('fs');

const foundFile = fs.readdirSync('texts/');
const filePath = '../texts/' + foundFile[1];

pdfUtil.pdfToText(filePath, function(err, text) {
    if (err) throw(err);
    fs.writeFile("../texts/textFromPdf.txt", text, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });      
});
