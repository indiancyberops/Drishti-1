
#colour section
red='\033[1;31m'
rset='\033[0m'
grn='\033[1;32m'
ylo='\033[1;33m'
#script coding starts
clear
echo " "
echo " "
echo "
 ##::::'##:'########::'########:::::'###::::'########:'###>
 ##:::: ##: ##.... ##: ##.... ##:::'## ##:::... ##..:: ##.>
 ##:::: ##: ##:::: ##: ##:::: ##::'##:. ##::::: ##:::: ##:>
 ##:::: ##: ########:: ##:::: ##:'##:::. ##:::: ##:::: ###>
 ##:::: ##: ##.....::: ##:::: ##: #########:::: ##:::: ##.>
 ##:::: ##: ##:::::::: ##:::: ##: ##.... ##:::: ##:::: ##:>
. #######:: ##:::::::: ########:: ##:::: ##:::: ##:::: ###>
:.......:::..:::::::::........:::..:::::..:::::..:::::....>

"|lolcat
echo " "
echo " "
sleep 6.0
clear
echo -e "$red                         ChEcKiNg..>$rset"
sleep 2.0
clear
echo -e "$red                         ChEcKiNg...>$rset"
sleep 2.0
clear
echo -e "$red                         ChEcKiNg....>$rset"
sleep 2.0
clear
echo -e "$red                         ChEcKiNg.....>$rset"
sleep 2.0
clear
echo " "
echo " "
echo -e "$grn                updating the Drishti  please wait$rset"
sleep 2.0
cd $HOME
rm -rf Drishti
git clone https://github.com/7ORP3DO/Drishti
clear
echo " "
echo -e "$grn               infect has been updated check it now...$rset"
sleep 3.0
echo " "
cd $HOME
cd Infect
node main.js
clear
sleep 1.0