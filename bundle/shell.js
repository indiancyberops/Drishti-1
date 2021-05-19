exports.update = () => {
    require('colors');
    const { exec } = require('child_process');


    console.log("This Process is Automatic.".brightYellow);
    console.log("This Process can take up to 2 minutes".brightCyan);
    console.log("Updating....".brightGreen);

    var scrpt = exec('bash update.sh',
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`error: ${error}`);
            }
            console.clear();
            console.log("Update Complete".brightGreen);
            setTimeout(() => {
                require('../bundle/home').show();
            }, 2000);
        });


}