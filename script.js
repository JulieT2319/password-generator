//declare arrays of valid characters by type
//alpha characters to use toUpperCase method for upper case letters
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//special characters with \ and space character removed
var specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',',
	'-', '.', '/', ':', ';', '<', '>', '=', '[', ']', '|', '^', '@', '?', '{',
	'}', '~'];
//numbers as strings, beginning with 0
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//declare password variable
var password = "";

var length = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
console.log(typeof length)
while (isNaN(length) || length < 8 || length > 128) {
	length = prompt("Please enter a number between 8 and 128");
}
//prompt for character types to include
var specChars = confirm("Should your password include special characters like @,!,% etc.?");
var upperCase = confirm("Should your password contain upper case alphabetic characters?");
var lowerCase = confirm("Should your password contain lower case alphabetic characters?");
var numbers = confirm("Should your password contain numbers?");

// set password with loop
// while (length > 0) {
// 	var
// }
