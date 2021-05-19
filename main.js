
console.clear();

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
  /*
  const ask = require('prompt-sync')();  
    
console.clear();

banner.show('summer');
console.log(' ');
banner.list('1','Instagram Lookup');
banner.list('2','IP Lookup');
banner.list('3','My IP Info');
banner.list('4','Address Lookup');
banner.list('5','Url Shortner');
banner.list('6','Url Expander');
banner.list('7','Decrypt Hash');
banner.list('8','Host Search');
banner.list('9','Google Search');
banner.list('10','Traceroute');
banner.list('11','DNS Lookup');
banner.list('12','My Device Info');
banner.list('13','Port Scan');
banner.list('14','HTTP Header Detector');
console.log('');
banner.list('99','Update Tool');
banner.list('00','Exit');
console.log(' ');
var ans = banner.ask("Select Your Option")

switch (ans) {
    
      case '1':
        require('./bundle/insta').show()
        break;
      case '2':
        require('./bundle/iplookup').show();
        break;
      case '3':
        require('./bundle/iplookup').show('myip');
        break;
      case '4':
        day = "Thursday";
        break;
      case '5':
        require('./bundle/url').short();
        break;
      case '6':
        require('./bundle/url').expand();
        break;
      case '7':
        day = "Saturday";
        break;
      case '8':
        day = "Saturday";
        break;
      case '9':
        day = "Saturday";
        break;
      case '10':
        day = "Saturday";
        break;
      case '11':
        day = "Saturday";
        break;
      case '12':
        day = "Saturday";
        break;
      case '13':
        require('./bundle/web').port();
        break;
      case '14':
        require('./bundle/web').head();
        break;      
      case '15':
        day = "Saturday";
        break;
      case '16':
        day = "Saturday";
        break;
      
      case '00':
            console.log('Bye!'.cyan);
            process.exit();
            break;
        
      case '99':
        const shell = require('./bundle/shell');
        shell.update();
        break;

      default:
            console.log("Invalid Option!" .brightRed);
            console.log('Bye!'.cyan);
            break;
  }


*/

}, 14900);