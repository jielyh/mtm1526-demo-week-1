// javascript single line comment
/*
Javascript multi-line comment
*/

// 'alert()' pops up a little window with okay button
alert('this is an alert.');

// 'prompt()' is for users, has a text field for the user to enter some text
var name;
while (!name) {
name = prompt('what is your name?');
}

//tace() and consol.log() = same thing
//'console.log()' writes outs the content of a variable for debugging
// identical to Actionscript's 'trace()'
console.log (name);

//'document.write()' allows us to output stuff to the end of the HTML file
// the '+' operator is for combining strings and together
document.write('Hello, ' + name);


// (i) is a variable we made to determine the number of loops
for (var i = 0; i < 5; i++) {
	document.write('<br>' + i); //<br> = new line for every + new number
	document.write('<h1>' + i + '<h1>');
}

function isNameCool (){
	var name = prompt ('What is your name?');
	
	if (name == 'jiely') {
			document.write('That is an awesome name!');
	} else {
			document.write('I dont like your name');
	}
}

isNameCool(); //making the function

var writeNameMultipleTimes = function () {
	for (var i = 0; i < 5; i++ ) {
		document.write('<strong> Jiely </strong> <br>');
	}
};

writeNameMultipleTimes ();