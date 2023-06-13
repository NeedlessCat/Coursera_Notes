(function (global) {

	//Set up a namespance for our utility
	var ajaxUtils = {};

	//Returns an HTTP request object
	function getRequestObject() {
		if(window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject) {
			//for very old IE browers (optional to mention)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported!");
			return(null);
		}
	}

	//Make an Ajax GET request to 'requestURL'
	ajaxUtils.sendGetRequest =
		function (requestURL, responseHandler, isJsonResponse) {
			var request = getRequestObject();
			request.onreadystatechange = 
				function() {
					handleResponse(request, responseHandler, isJsonResponse);
				};
			request.open("GET", requestURL,true);
			request.send(null);
		};

	//Only calls user provided 'responseHandler' function if response is ready and not an error.
	function handleResponse(request, responseHandler, isJsonResponse) {
		if ((request.readyState == 4) && (request.status == 200)) {

			//Default to isJsonResponse = true
			if (isJsonResponse == undefined) {
				isJsonResponse = true;
			}
			if(isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else {
				responseHandler(request.responseText);
			}
		}
	}

	//Expose utility to the global object
	global.$ajaxUtils = ajaxUtils;

})(window);


// //NOTE------
// //In Making Ajx GET request we can make modifications as....

// //Making these values available globally...
// var request = getRequestObject();
// var myhandler = null;

// function (requestURL, responseHandler) {
// 			var request = getRequestObject();

// 			//Directly calling handleResponse inspite of using any function.
// 			//(but now we need to get 'request' & 'responseHandler' values globally).
// 			request.onreadystatechange = handleResponse;
// 			request.open("GET", requestURL,true);
// 			request.send(null);
// 		};
// //Hopefully the above code should work well..
// //But since the process is asynchronous it doesn't.
// //As while working on a request, it might ask for next request but the parameter values stays the same.
// //(generating any way the same request again).
// //So it is not preferred.