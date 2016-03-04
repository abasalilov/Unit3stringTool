/*Length of String
Write a function that takes a string that is a sentence and contains multiple words. 
The function will then determine how many words are in the string and it will also find the average number of characters each word has (This will not include whitespace). 
The function will return a string expressing this information. The result should look like this:

var sentence = "I am happy you are reading this sentence";

stringTool(sentence) // "This string has 8 words.The average length of each word is 4.125 characters"

1. take sentence and turn into array,
2. count up #'s of words,
3. use length to count up word length and push into a new array.
4. add and divide by number of words. 

*/

var sampleStr = "Wow, that was tight! Thats what you kids call it these days, right? Tight?"
var totalChar = 0;

 function stringTool(Str) {
    	var stringSplit = Str.split(" "); 
		var numWords = stringSplit.length;
   
   for (var i = 0; i < stringSplit.length; i ++) {
       totalChar += stringSplit[i].length;
    }
    console.log("This string has "+numWords+" words. The average length of each word is "+ ((Math.round((totalChar/numWords)*100))/100) +" characters.")
}


stringTool(sampleStr);
console.log(totalChar);