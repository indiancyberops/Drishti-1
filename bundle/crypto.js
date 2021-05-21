exports.base64 = (des) => {

    const banner = require("./banner");
    const clr = require('colors');
    console.clear();

    if (des) {
        banner.show('vice', 'Base64 Decoder');
        const CryptoJS = require("crypto-js");

        var text = banner.ask("Enter Base64 String to be Decoded");

        var base64 = CryptoJS.enc.Base64.parse(text)

        console.log('Your Decoded text : '.red.bold + base64.green);
    } else {

        banner.show('vice', 'Base64 Encoder');
        const CryptoJS = require("crypto-js");

        var text = banner.ask("Enter text to be Encoded");

        var base64 = CryptoJS.enc.Base64.stringify(text)

        console.log('Your Encoded text : '.red.bold + base64.green);
    }

}


