const gradient = require('gradient-string');
const dateFormat = require("dateformat");
const prompt = require('prompt-sync')();
const clr = require('colors');
var current_date = new Date();
var show_date = dateFormat(current_date, "dd-mm-yyyy");
var show_time = dateFormat(current_date, "hh:MM:ss TT");

exports.show = (mode,mode2) => {

    banner_logo = `   
        ..,,;;;;;;,,,,
           .,;'';;,..,;;;,,,,,.''';;,..
        ,,''                    '';;;;,;''
       ;'    ,;@@;'  ,@@;, @@, ';;;@@;,;';.
      ''  ,;@@@@@'  ;@@@@; ''    ;;@@@@@;;;;
         ;;@@@@@;    '''     .,,;;;@@@@@@@;;;
        ;;@@@@@@;           , ';;;@@@@@@@@;;;.
         '';@@@@@,.  ,   .   ',;;;@@@@@@;;;;;; ` + 'v1.0.0'+ `
            .   '';;;;;;;;;,;;;;@@@@@;;' ,.:;'
              ''..,,     ''''    '  .,;'
                   ''''''::''''''''       `;
                      

    console.log(gradient[mode](banner_logo));
   console.log(clr.rainbow("                        DRIShTI"));

    console.log(' ');
    console.log('       Time   : [ ' + show_date.magenta.italic + ' | ' + show_time.magenta.italic + ' ]');
    console.log('       Team   : [ ' + 'Indian Cyber Ops'.yellow.italic + ' ]');
    console.log('       Author : [ ' + 'Prateek'.brightGreen.italic + ' | ' + 'Biswajeet'.brightRed.italic    + ' ]' );
    
    if (mode2) {
    console.log('       Tool   : [ ' + mode2.brightCyan + ' ]' );
    console.log(' ');
    
    }
    
}


exports.list = (num,txt)  => {
   console.log('['.green + num.brightRed + '] '.green + txt.cyan.italic );
}


exports.ask = (qus)  => {
       return prompt( qus.yellow + ' : '.cyan)
}