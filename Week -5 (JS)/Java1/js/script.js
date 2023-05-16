//DOM Manipulation...
//There is an object called "document".
// Even the windoe contains "document" as object.
// You may check it out in console; type "window.document".

//One of the way to access is get document by ID...
//Write in cosole 'document.getElementById("#Your_id_name");'

console.log(document.getElementById("title"));
//You will get a"null" if u used to in <head> section
//(as nothing is executed for now)...
//So add script-part at end. 

console.log(document instanceof HTMLDocument);



//------------------------------------------------------------------------------------

//Part-2...
console.log("-----Part-2-----");

function sayHello() {
	/*console.log(
		document.getElementsById("name").value
		)
//It will give output in the console section.....
	*/


	var name = document.getElementById("name").value;
	var message = "Hello " + name + "!";

	document
	.getElementById("content")
	.textContent = message;

//If we want to get the content in h2-size....
	var message1 = "<h2>Hello " + name + "!</h2>";

	document
	.getElementById("content1")
	//.textContent = message1; --> NOT desired result...
	.innerHTML = message1;

//If we wanna manipulate the HEading for some input then...

	if(name === "student") {
		var title =
		      document
		      //.getElementById("title") --> not done this way..
		      .querySelector("#title")
		      .textContent;
		title += " & Lovin' it!";
		//If we leave here, it won,t get updated...
		document
		.querySelector("#title")
		//.querySelector("h1") --->Works similar to above line for this content..
		.textContent = title; //Upadating the value....
	}
}