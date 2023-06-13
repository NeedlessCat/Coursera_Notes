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
					.sendGetRequest("/data/name.json",
						function (res) {
							var message = res.firstName + " " + res.lastName
							if(res.likesChineseFood) {
								message += " likes Chisnese food";
							}
							else {
								message += " doesn't like Chinese Food"
							}
							message += " and uses ";
							message += res.numberOfDisplays;
							message += " displays for coding.";

							document.querySelector("#content")
									.innerHTML = "<h2>" + message + "</h2>";
						});
				
			});
	});