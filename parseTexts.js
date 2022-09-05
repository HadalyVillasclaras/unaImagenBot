console.log('hi');
//Omit option to extract all text from the pdf file
let pdfUtil = require('pdf-to-text');
let pdf_path = "proust_tiempo_perdido.pdf";
var fs = require('fs');

pdfUtil.pdfToText(pdf_path, function(err, data) {
    if (err) throw(err);
    fs.writeFile("txtFromPdf.txt", data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });      
});
 
 

// let pdfUtil = require('pdf-to-text');
// let pdf_path = "proust_tiempo_perdido.pdf";

// pdfUtil.info(pdf_path, function(err, info) {
//     if (err) throw(err);
//     console.log(info);
// });



//option to extract text from page 0 to 10
// let option = {from: 0, to: 10};

// pdfUtil.pdfToText(pdf_path, option, function(err, data) {
//   if (err) throw(err);
//   console.log(data); //print text    
// });





