exports.update = () => {
    
    const clr = require('colors');
    const { exec } = require("child_process");

    console.log("This Process is Automatic.".brightYellow);
    console.log("This Process can take up to 2 minutes".brightCyan);
    console.log("Updating....".brightGreen);

    exec("bash update.sh", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`.red);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log("Update Complete".brightGreen);
    });

}