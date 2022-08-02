const reverseString = function(string) {
var splitString = string.split("");
var reverseArray = splitString.reverse();
var reverseString = reverseArray.join("");
return reverseString

};

// Do not edit below this line
module.exports = reverseString;
