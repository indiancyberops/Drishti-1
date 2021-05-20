console.log('Starting tool...');

console.clear();
require("./bundle/banner").show('vice','','mains');
console.log('\n\n');


const loader = require('./bundle/loading');

loader.show(4000,'cyan',' Checking Dependencies...', 'Dependencies Satisfied');


setTimeout(() => {
  loader.update();
}, 4100);


setTimeout(() => {
  loader.show(3000,'yellow',' Running Tests...' , 'Test Completed');
}, 9500);


setTimeout(() => {
  loader.show(1000,'red',' Loading...' , 'Loading Completed');
}, 12600);

const banner = require('./bundle/banner');


setTimeout(() => {

  require('./bundle/home').show();

}, 14900);