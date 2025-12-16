// 1. Install inquerer to get userINput
// Install qr-(mage npm packame to turn UsrInp tp QR image
// Create Text file to save UsrInp using native fs node module

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

//From the document it was said that it is a object
const prompt = inquirer
  .prompt([
    /* Pass your questions in here */
    {
    message: "Type in your url",
    name: "url"
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    {
        console.log(answers);
        const url = answers.url;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
 
        // var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
        // fs.writeFile('qrCode.svg', svg_string, (err) =>{
        //     if(err) throw err;
        //     console.log("Fle saved");
        // });

    }
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })



  // 2. Install qr-(mage npm packame to turn UsrInp tp QR image

  