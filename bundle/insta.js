exports.show = () => {


const ig = require('instagram-scraping');
const banner = require('./banner');
const cTable = require('cli-table');
const clr = require('colors');
const ask = require('prompt-sync')();




    console.clear();
    banner.show('fruit');
    const username = banner.ask("Enter Username");



function bool(x) {
    if (x) {
        return 'Yes';
    } else {
        return 'No';
    }
}


function is_null(x) {
    if (x == null) {
        return 'n/a';
    } else {
        return x;
    }
}

function qus2() {

    const qus2 = ask('Do You want to show Media Info? '.magenta + '[Y/N] '.yellow);

    if (qus2 == 'y') {
        console.log('yes');
    } else if (qus2 == 'n') {
        console.log('no');
    } else {
        console.log('Invalid Inpud!'.cyan);
    }
}

 
console.log('success1');
function SHOW_USER() {


    console.log('success2');

    ig.scrapeUserPage(username).then((result) => {

console.log(result.user);

            
var table = new cTable({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
           , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
           , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
           , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });
  
  table.push(
      [`Username` , username] ,
      [`Full Name`.yellow  , is_null(result.user.full_name)] ,
      [`Biography`.yellow  , is_null(result.user.biography)] ,
      [`Followers`.yellow  , is_null(result.user.edge_followed_by.count)] ,
      [`Following`.yellow  , is_null(result.user.edge_follow.count)] ,
      [`Posts`.yellow  , is_null(result.user.edge_owner_to_timeline_media.count)] ,
      [`Private`.yellow  , is_null(result.user.is_private)] ,
      [`Verified`.yellow  , is_null(result.user.is_verified)] ,
      [`Recently Joined`.yellow  , is_null(result.user.is_joined_recently)] ,
      [`Reels Count`.yellow  , is_null(result.user.highlight_reel_count)] ,
      [`IGTV Count`.yellow  , is_null(result.user.edge_felix_video_timeline.count)] ,
      [`ID`.yellow  , is_null(result.user.id)] ,
      [`FBid`.yellow  , is_null(result.user.fbid)] ,
      [`Professional Account`.yellow  , is_null(result.user.is_professional_account)] ,
      [`Business Account`.yellow  , is_null(result.user.is_business_account)] ,
      [`Business Contact Method`.yellow  , is_null(result.user.business_contact_method)] ,
      [`Business Email`.yellow  , is_null(result.user.business_email)] ,
      [`Business Phone Number`.yellow  , is_null(result.user.business_phone_number)] ,
      [`Business Category`.yellow  , is_null(result.user.business_category_name)] ,
      [`External Url`.yellow  , is_null(result.user.external_url)] ,
      [`Country Block`.yellow  , is_null(result.user.country_block)] ,
      [`Clips`.yellow  , is_null(result.user.has_clips)] ,
      [`Guides`.yellow  , is_null(result.user.has_guides)] ,
      [`Channel`.yellow  , is_null(result.user.has_channel)] ,
      [`Category`.yellow  , is_null(result.user.category_name)] 
    
  );
  
  console.log(clr.green(table.toString()));
  qus2();

    }).catch((err) => {
            console.log(err);
    });

}

SHOW_USER();


}

        /*

   
      [`Viewer Blocked`.yellow  , result.user.blocked_by_viewer] ,
     
     
     
      console.log(`
            
            Username             : ${username}
            Full Name            : ${result.user.full_name}
            Biography            : ${result.user.biography}
            Followers            : ${result.user.edge_followed_by.count}
            Following            : ${result.user.edge_follow.count}
            Private              : ${result.user.is_private}
            Verified             : ${result.user.is_verified}
            ID                   : ${result.user.id}
            FBid                 : ${result.user.fbid}
        
            External Url         : ${result.user.external_url}
            Country Block        : ${result.user.country_block}
            Viewer Blocked       : ${result.user.blocked_by_viewer}
            Business Account     : ${result.user.is_business_account}
            Professional Account : ${result.user.is_professional_account}
            Recently Joined      : ${result.user.is_joined_recently}
            Category Name        : ${result.user.category_name}
            Reels Count          : ${result.user.highlight_reel_count}
            Profile Pic Url      : ${result.user.profile_pic_url_hd}
            `);
        */