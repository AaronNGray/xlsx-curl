const fs = require('fs')
const curl = require('curl')

const dataURL = "https://fingertips.phe.org.uk/documents/Historic%20COVID-19%20Dashboard%20Data.xlsx";

const localFileName = "Historic-COVID-19-Dashboard-Data.xlsx";

curl.get(dataURL, {}, function(error, response, body) {
  if (error) {
    console.log("Error reading file - error:", error);
    return
  }

  console.error('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  fs.writeFileSync(localFileName, body);
});
