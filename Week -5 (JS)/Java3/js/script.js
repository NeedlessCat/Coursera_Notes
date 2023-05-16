document.addEventListener("DOMContentLoaded",
	function (event) {

		function sayHello (event) {
	console.log(event);


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

document.querySelector("button")
 .addEventListener("click", sayHello);

//Check again please.... Lecture give MouseEvent, while i get PointerEvent...
//Observing and trying different objects of MouseEvent...
//(Pay a visit to MDN(Mozilla Developer Network) to get objects for MouseEvent)..
 document.querySelector("body")
   .addEventListener("mousemove", 
   	 function (event) {
   	   if(event.shiftKey === true) {
   	   console.log("x: " + event.clientX);
   	   console.log("y: " + event.clientY);
   	}
   	   }
   	 );

});