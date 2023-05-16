/*
sayHello();
sayHi();
*/
//Issue: Yaakov ia replaced by John in output....earlier..
//So made improvements...
yaakovGreeter.sayHello();
johnGreeter.sayHi();





//Immediately Invoked Function Expression[IIFE]....
(function() {
	console.log("Hello Coursera!");
})();
/*
(function(name) {
	console.log("Hello " + name);
})();
*///----->Gives 'Hello Undefined'
(function(name) {
	console.log("Hello " + name);
})("Coursera!");


//----------------------------------------------------------------------------------------------------------


//Result for the conclusions....
/*console.log("------------Result after merging the Concept-----------");
yaakovGreeter1.sayHello();*/