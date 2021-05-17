exports.show = (time,clr,txt,cmptxt) => {



const ora = require('ora');

const spinner = ora('Please Wait').start();

setTimeout(() => {
	spinner.color = clr ;
	spinner.text = txt;
    spinner.spinner = {
        interval: 500,
        frames: [
          '▰▱▱▱▱▱▱', '▰▰▱▱▱▱▱',
          '▰▰▰▱▱▱▱', '▰▰▰▰▱▱▱',
          '▰▰▰▰▰▱▱', '▰▰▰▰▰▰▱',
          '▰▰▰▰▰▰▰', '▰▱▱▱▱▱▱'
        ]
      }
}, 500);

setTimeout(() => {
    spinner.succeed(cmptxt);
}, time);


}
