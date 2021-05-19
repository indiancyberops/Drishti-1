

exports.show = (mode,mode2) => {

  const ask = require('prompt-sync')();
  const banner = require('./banner');

    
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
          require('./insta').show()
          break;
        case '2':
          require('./iplookup').show();
          break;
        case '3':
          require('./iplookup').show('myip');
          break;
        case '4':
          day = "Thursday";
          break;
        case '5':
          require('./url').short();
          break;
        case '6':
          require('./url').expand();
          break;
        case '7':
          day = "Saturday";
          break;
        case '8':
          require('./web').host();
          break;
        case '9':
          day = "Saturday";
          break;
        case '10':
          require('./web').trace();
          break;
        case '11':
          require('./web').dns();
          break;
        case '12':
          day = "Saturday";
          break;
        case '13':
          require('./web').port();
          break;
        case '14':
          require('./web').head();
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
          const shell = require('./shell');
          shell.update();
          break;
  
        default:
              console.log("Invalid Option!" .brightRed);
              setTimeout(() => { require('../bundle/home').show() }, 1000);
              break;
      }
    }
    