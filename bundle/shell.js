exports.update = () => {

    const { exec } = require("child_process");


    exec("bash update.sh", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

}