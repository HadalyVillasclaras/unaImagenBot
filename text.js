let pdfUtil = require('pdf-to-text');
let pdf_path = "proust_tiempo_perdido";

pdfUtil.info(pdf_path, function(err, info) {
    if (err) throw(err);
    console.log(info);
});