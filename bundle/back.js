exports.back = () => {
    const prompt = require('prompt-sync')();
    const clr = require('colors');

    setTimeout(() => {
        prompt("\nPress enter to go back....".blue.italic);
        require('./home').show();
    }, 1);

}