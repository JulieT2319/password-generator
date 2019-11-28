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
var length = document.getElementById("length").value;//parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
var specChars = document.getElementById("specials").checked;//confirm("Should your password include special characters like @,!,% etc.?");
var upperCase = document.getElementById("upper").checked;//confirm("Should your password contain upper case alphabetic characters?");
var lowerCase = document.getElementById("lower").checked;//confirm("Should your password contain lower case alphabetic characters?");
var numbers = document.getElementById("number").checked;// confirm("Should your password contain numbers?");

function generatePassword() {
	password = "";
	length = document.getElementById("length").value;
	while (isNaN(length) || length < 8 || length > 128) {
		length = prompt("Please enter a number between 8 and 128");
	}

	//prompt for character types to include
	//change to reference checkboxes on html list
	specChars = document.getElementById("specials").checked;//confirm("Should your password include special characters like @,!,% etc.?");
	upperCase = document.getElementById("upper").checked;//confirm("Should your password contain upper case alphabetic characters?");
	lowerCase = document.getElementById("lower").checked;//confirm("Should your password contain lower case alphabetic characters?");
	numbers = document.getElementById("number").checked;// confirm("Should your password contain numbers?");
	if (specChars === false && upperCase === false && lowerCase === false && numbers === false) {
		alert("You must select at least one character type for your password")
	} else {
		// set password with loop
		for (i = length; i > 0; i--) {
			var charType = Math.floor(Math.random() * 4);

			if (charType === 0 && specChars) {
				password = password.concat(specials[Math.floor(Math.random() * specials.length)]);
			} else if (charType === 1 && upperCase) {
				password = password.concat(alpha[Math.floor(Math.random() * alpha.length)].toUpperCase());
			} else if (charType === 2 && lowerCase) {
				password = password.concat(alpha[Math.floor(Math.random() * alpha.length)]);
			} else if (charType === 3 && numbers) {
				password = password.concat(nums[Math.floor(Math.random() * nums.length)]);
			} else {
				i++;
			}
			console.log(password);
		}

		document.getElementById("password").innerHTML = "";
		document.getElementById("password").innerHTML = password;
	}
}
