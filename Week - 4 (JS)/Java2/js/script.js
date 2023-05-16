var string = "Hello";
string += " World";
//string = string + " World";
console.log(string + "!");


//--- Regular MATH Operators -----
console.log((5 + 4)/3);
console.log(undefined/5);
function test1 (a)
{
	console.log(a/5);
}
test1();

// --- Equality --
var x=4, y=4;
if (x==y)
{
	console.log("x=4 is equal to y=4");
}
x= "4";
if(x==y)
{
	console.log("x='4' is equal to y=4");
}

//-- strict Equality --
if(x === y)
{
	console.log("strict: x='4' si equal to y=4");
}
else
{
	console.log("Strict: x='4' is NOT equal to y=4");
}

//---- Boolean True/False...
//------If statement (all false)....
if(false || null || undefined || "" || 0 || NaN)
{
	console.log("This line won't ever execute");
}
else
{
	console.log("All false");
}
//------If statement (all true)....
if(true && "hello" && 1 && -1 && "false")
{
	console.log("All true");
}

// ----- Best practice for {} style
// Curly brace ont he same or next line.....
// Is it  jsut a style??
function a()
{
	return
	{
		name: "Aayush"
	};
}

function b()
{
	return
	{
		name: "Aayush"
	};
}
console.log(a());
console.log(b());

//For loop....
var sum=0;
for (var i=0;i<10;i++)
{
	sum=sum+i;
}
console.log("sum of 0 through 9 is: "+sum);