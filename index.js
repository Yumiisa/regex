//.test() check if there's match in string and return true or false accordingly
let myString= 'Hello, World!';
let myRegex=/Hello/;
let reult = myRegex.test(myString)
//match literal string

let weldoIsHiding="Somewhere Waldo is hiding in this text.";
let waldoRegex=/Waldo/
let result=waldoRegex.test(weldoIsHiding) //true

//Match a literal string with  different possibilities using or operator (|)
let petString="James has a pet.";
let petRegex=/dog|cat|bird|fish/
let res=petRegex.test(petString)

//ignore case while matching
let myStr="freeCodeCamp"
let fccRegex=/freecodecamp/i //i means ignore case
let ans=fccRegex.test(myStr)

//Extract matches
let extractStr="Extract the word 'coding' from the string.";
let codingRegex=/coding/
let answer=extractStr.match(codingRegex) // output coding

//find more than the first match
let testSt="Repeat, Repeat, Repeat"
let ourRegex=/Repeat/
testSt.match(ourRegex)

let twinkleStar="Twinkle, twinkle, little star"
let starRegex=/change/ig //i ignore case and g match every single time it appear 
let resul=twinkleStar.match(starRegex)

//match anything with wildcard period period (.) is wildcard character that stand for anything
let humStr="I'll hum a song";
let hugStr="Bear hug";
let huRegex=/hu./;
humStr.match(huRegex); //output ["hum"]
hugStr.match(huRegex); //output ["hug"]

let exampleStr="Let's have fun with regular expressions!";
let unRegex=/.un/
let answe=unRegex.test(exampleStr); //true

//match single character with multiple possibilities
let bgRegex=/b[aiu]g/;
let quoteSample="Beware of bugs in the above code; I have only proved it correct"
let vowelRegex=/[aeiou]/ig
let myAnswer=quoteSample.match(vowelRegex)

//match letters of the alphabet using (a-z)
let quoteSamp="The quick brown fox jumps over the lazy dog."
let alphabetRegex=/[a-z]/ig
let myResult=quoteSamp.match(alphabetRegex)
//match numbers and letters of the alphabet
let quoteSam="Blueberry 3.141592653s are delicious."
let myReg=/[2-6h-s]/ig
let myRes=quoteSample.match(myReg)
//match a single character not specified using carret character in square brackets
let quoteSa="3 blind mice."
let myRege=/[^0-9aeiou]/ig;
let ourResult=quoteSa.match(myRege) //match everything except 0 to 9 and aeiou

//match character that occur one or more times using + character
let difficultSpelling="Mississippi";
let mRegex=/s+/g
let ourResul=difficultSpelling.match(mRegex)
//match character that occurs zero or more times within * characters
let soccerWord="goooooooooal!"
let gPhrase="gut feeling"
let oPhrase="over the moon";
let goRegex=/go*/;// match g then on zero or more times
soccerWord.match(goRegex);//return ["gooooooooo"]
gPhrase.match(goRegex);//return ["g"]
oPhrase.match(goRegex);//return null
let chewiequote="aaaaaaaaaaaaaaaaaaarrrgh!"
let chewieRegex=/Aa*/
let regResult=chewiequote.match(chewieRegex);//return [Aaaaaaaaaaaaa]

//find characters with lazy matching find smallest possible match use ? for lazy match
let string="titanic";
let regex=/t[a-z]*i/;//return [titani]
let rege=/t[a-z]*?i/; //return [ti]
string.match(regex)

let text="<h1>Winter is coming</h1>"
let mRege=/<.*>/; //["<h1>Winter is coming</h1>"]
let mReg=/<.*?>/; //return [<h1>]
let myAns=text.match(myRegex)

//find one or more criminal in a hunt
let crowd='P1P2P3P4P5P6CCCP7P8P9'
let reCriminals=/C+/;
let matchedCriminal=crowd.match(reCriminals) //return [CCC]

//match beginning String patterns using caret not in square bracket
let rickyAndCal="Cal and Ricky both like racing."
let calRegex=/^Cal/;
let cal=rickyAndCal.match(calRegex) //true becausse Cal is at beginning of the string

//Match ending String patterns using dollar sign at the end
let caboose="The last car on a train is the caboose"
let lastRegex=/caboose$/
let resu=lastRegex.test(caboose) //true

//match all letters and numbers use \w to match alphabet both caps and small underscores and digits
let quoteBox="The five boxing wizard jump quickly.";
let alphabetRegexV2=/\w/g
let regResu=quoteBox.match(alphabetRegexV2).length //length of whole string excluding spaces and periods
//match everything but letters and numbers \W 
let qoutesBox="The five boxing wizard jump quickly.";
let alphabetRegexV=/\W/g
let resultx=qoutesBox.match(alphabetRegexV).length; //length of spaces and periods in string

//match all numbers using \d
let numString="Your sandwich will be $5.00"
let numRegex=/\d/g
let numresult=numString.match(numRegex).length //return 3
//match all non-numbers using upperCase \D
let numStrings="Your sandwich will be $5.00"
let noNumRegex=/\D/g
let results=numStrings.match(noNumRegex).length //return 24, length of non numbers

//curl braces indicate number rof times previous thing can appear and first number is minimum number of matches and after is maximum number of matches
//Restrict possible usernames
//if there're numbers they must be at the end.
//letters can be lowercase and uppercase
//at least two characters long. two-letter name can't have numbers
let username="JackOfAllTrades"
let userCheck=/^[a-zA-Z]{2,}\d*$/
let ress=userCheck.test(username)

//match whitespace using \s  match space,tab,new line
let sample="WhiteSpace is important in separating words"
let countWhiteSpace=/\s/g
let myRess=sample.match(countWhiteSpace)

//match Non-whitespace characters
let samples="WhiteSpace is important in separating words"
let countWhiteSpaces=/\S/g
let sampleRes=sample.match(countWhiteSpaces) //get all characters that are not whitespace

//specify upper and lower number of matches
let ohStr="Ohhh no";
let ohRegex=/Oh{3,6} no/
let resultss=ohStr.test(ohStr)
//specify only the lower number of matches
let haStr="Hazzzzzzah";
let haRegex=/z{4,}/
let hares=haRegex.test(haStr)
//specify exact number of matches
let timStr="Timmmmber"
let timRegex=/Tim{4}ber/ //exactly 4 m
let timResult=timRegex.test(timStr)

//check for all or none using ? checks for zero or one of preciding element
let favWord="favourite"
let favRegex=/favou?rite/ //match favourite or favorite
let favRes=favRegex.match(favWord)
//positiven or negative lookahead tell javascript to look ahead to check pattern
//positive lookahead use = while negative use !
let quit="qu"
let noquit="qt"
let quRegex=/q(?=u)/ //check for q and check if there's u in the string then return q
let qRegex=/q(?!u)/ //check for q and check if there's nop u in  the string then  return q
quit.match(quRegex) //return ["q"]
noquit.match(qRegex) //return ["q"]
let sampleWord="astronaut";
let pwRegex=/(?=\w{5})(?=\D*\d{2})/
let wordResult=pwRegex.test(sampleWord)
//Reuse pattern using capture groups use () with slash one to repeat
let repeatStr="regex regex";
let repeatRegex=/(\w+)\s\1/
repeatRegex.test(repeatStr) //Return true
repeatStr.match(repeatRegex) //Return ["regex regex, "regex]
let repeatNum="42 42 42"
let reRegex =/^(d+)\s\1\s\1$/
let regResul=reRegex.test(repeatNum)
//use capture group top search and replace
let wrongText="The sky is silver."
let silverRegx=/silver/
wrongText.replace(silverRegx,"blue")
"Code Camp".replace(/(\w+)\(\w+)/,'$s $1')
let huhText="This sandwich is good.";
let fixRegex=/good/
let replaceText="okey-dokey"
let replaceResult=huhText.replace(fixRegex, replaceText)
//remove white space at the beginning
let hello="   hello, World!  ";
let wsRegex=/^\s+|\s+$/g
let hResult=hello.replace(wsRegex, '')



