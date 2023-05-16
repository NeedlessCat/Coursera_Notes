//Functions are First-CLass Data Types
//Functions are objects
function multiply(x,y)
{
	return x*y;
}
console.log(multiply(5,3));
multiply.version = "v.1.0.0";
console.log(multiply)
/* It gives output as the '15' and the function...
   The function is shown due to the inherited propert written as:-
    "multiply.toString()"..
*/
console.log(multiply.version);

//Function factory
function makeMultiplier(multiplier)
{
	var myFunc = function (x)
	{
		return multiplier * x;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
/*Above line gives OUTPUT = 10*3 = 30*/
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


//Passing functions as arguments...
function doOperationOn(x, operation)
{
	return operation(x);
}

var result = doOperationOn(5,multiplyBy3);
console.log(result);
//Above OUTPUT = 5*3 = 15..
result = doOperationOn(100,doubleAll);
console.log(result);

//----------------------------------------------------------------------------------------
console.log(" ---------------NEXT LECTURE NOTES ---------------");
