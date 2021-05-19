exports.expand = () => {

    const banner = require('./banner');
    console.clear();
    banner.show('retro', 'URL Expender');
    const clr = require('colors');


    const longUrl = require('expand-url');
    const ask = require('prompt-sync')();

    var url = banner.ask("Enter Your Short Url");

    longUrl.expand(url, function (err, longUrl) {
        console.log('\nYour Expended Url:  '.cyan + longUrl.brightGreen);
    });


}



exports.short = () => {

    const banner = require('./banner');
    console.clear();
    banner.show('retro', 'URL Shortner');
    const clr = require('colors');
    const ask = require('prompt-sync')();

    var url = banner.ask("Enter Your Long Url");

    const shortUrl = require('node-url-shortener');

    shortUrl.short(url, function (err,shortUrl) {
        console.log('\nYour Short Url:  '.cyan + shortUrl.brightGreen);
    });

}