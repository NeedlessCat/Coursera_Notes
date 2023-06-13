//Event Handling
document.addEventListener("DOMContentLoaded",
	function (event) {

		//Unobstrusive event binding
		document.querySelector("button")
			.addEventListener("click", function () {
				//var self = this;
				//var name = "";

				//Call server to get the name..
				$ajaxUtils
					.sendGetRequest("/data/name.txt",
						function (request) {
							//self.name = request.responseText;
							var name = request.responseText;
							// console.log(name);

							//Putting this function outside the function make it of no work
							//as due to asynchronous call the self.name value is declared and called at same time due to which during
							//the call no value is present in self.name.
							document.querySelector("#content")
									.innerHTML = "<h2>Hello " + name + "!";
						});
				
			});
	});