//Event Handling...
//we can get rid of putting the script at bottom from this..
/*

document.addEventListener("DOMContentLoaded",
	function (event) {

		function sayHello (event) {
	//console.log(this); -->Used to just check the pointing value.
	//If we want to change the text in button then...
	this.textContent = "Said it!";
	
	var name = document.getElementById("name").value;
	var message1 = "<h2>Hello " + name + "!</h2>";

	document
	.getElementById("content1")
	.innerHTML = message1;

	if(name === "student") {
		var title =
		      document
		      .querySelector("#title")
		      .textContent;
		title += " & Lovin' it!";
		document
		.querySelector("#title")
		.textContent = title;
	}
}

//Unobstrusive Event Binding....
document.querySelector("button")
 .addEventListener("click", sayHello);

//Other way to directly handle 'onclick' property is .....
//document.querySelector("button")
//      .onclick = sayHello;
	})

*/
//For using above portion, u may put the script at top..

//----------------------------------------------------------------------------------------------------------

//onclick / onblur / other onkeywords are one way to handle button...but have some side effects..
//1. We need to dirty the html page with these words all around...
//   (Even the html page is for content, not for behaviour..)
//2. The 'this' will be pointing to window section, it should be pointing to button-section.

function sayHello() {
	//console.log(this); -->Used to just check the pointing value.
	//					 -->at first, it points to window.
	//					 -->after using '.addEventListener(..., sayHello), it points to button'
	//If we want to change the text in button then...
	this.textContent = "Said it!";
	
	var name = document.getElementById("name").value;
	var message1 = "<h2>Hello " + name + "!</h2>";

	document
	.getElementById("content1")
	.innerHTML = message1;

	if(name === "student") {
		var title =
		      document
		      .querySelector("#title")
		      .textContent;
		title += " & Lovin' it!";
		document
		.querySelector("#title")
		.textContent = title;
	}
};

//Unobstrusive Event Binding....
document.querySelector("button")
 .addEventListener("click", sayHello);

//Other way to directly handle 'onclick' property is .....
//document.querySelector("button")
//      .onclick = sayHello;