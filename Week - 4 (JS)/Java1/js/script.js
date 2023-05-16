var message="in global";
console.log("global:message = "+message);

var a= function ()
{
	var message = "inside a";
	console.log("a: message = "+message);
 /*function b()
	{
		console.log("b: message = "+message);
	}
	b();*/
}
a();

//Understanding Undefined function......
// var x;
// console.log(x);
/* if 'var x' is commented and 'cosole.log(x)' is run... ERROR:x not defined.
   'not defined' is different from 'underfined'*/
// if (x==undefined){
// 	console.lg("x is undefined");
// }
// x=5;
// if(x==undefined)
// {
// 	console.log("x is undefined");
// }
// else
// {
// 	console.log("x has been defined");
// }