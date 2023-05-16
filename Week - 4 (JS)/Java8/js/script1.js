//var name = "Yaakov";
var yaakovGreeter = {}
yaakovGreeter.name = 'Yaakov';
//function sayHello()
yaakovGreeter.sayHello = function ()
{
	// console.log("Hello " + name);
	console.log("Hello " + yaakovGreeter.name);
}


//--------------------------------------------------------------------------------------------------------------

//Using the Immediately Invoked Function Expression, we can write above thing as....
/*(function (window) {
	var yaakovGreeter1 = {};
	yaakovGreeter1.name= "Yaakov";
	var greeting ="Hello ";
	yaakovGreeter1.sayHello = function() {
		console.log(greeting + yaakovGreeter1.name);
	}
	window.yaakovGreeter1 = yaakovGreeter1;
})(window);*/

/*NOTE: this above thing will not work untill we add the 'window paramenter;
        as it otherwise not able to access yaakovGreeter.....'
*/