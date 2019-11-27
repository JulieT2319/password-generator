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

var length = prompt("How long do you want your password to be? (8-128 characters)");
while (typeof (length) !== "number" || length < 8 || length > 128) {
	length = prompt("Please enter a number between 8 and 128");
}

