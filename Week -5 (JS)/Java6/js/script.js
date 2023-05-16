//--------Copying by Value....
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b=5;
console.log("after b update: ");
console.log("a: " + a);
console.log("b: " + b);

//---------Copying by reference---------
var a ={ x:7 };
var b=a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update: ");
console.log(a);
console.log(b);

//---------Passing by Value-----------
function changePrimitive(primValue)
{
	console.log("in changePrimitive....");
	console.log("before: ");
	console.log(primValue);

	primValue = 5;
	console.log("after:");
	console.log(primValue);
}

var value = 7;
changePrimitive(value); //primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);

//----------Passing by reference-------
function changeObject(objValue)
{
	console.log("changeObject....");
	console.log("before:");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}
value = { x:7 };
changeObject(value);
console.log("after changeObject, orig value");
console.log(value);

//----------------------------------------------------------
console.log(" ");
console.log("------------NEXT LECTURE NOTES---------");
console.log(" ");
//Working of 'this'.......
function test()
{
	console.log(this);//It calls global 'Window' object.
	this.myName = "Yaakov";
}
test();
console.log(window.myName);
//Other ways to create functions and objects....
function Circle(radius)
{
	console.log(this);
	this.getArea = function() {
		return Math.PI * Math.pow(this.radius,2);
	};
}
var myCircle = new Circle(10); // new Object() created using function name..
console.log(myCircle);
//Above, each circle can have their own radius but calling getArea each time
//makes it more time-taking.....
//Resolving it as....
function Circle1(radius)
{
	this.radius = radius;
}
//We are using a prototype...(not shown as a property of object; available in its proto-section..)
//It can't be used inside the function...Keep it outside..
Circle.prototype.getArea= function() {
	return Math.PI * Math.pow(this.radius, 2);
}

//Always remember to put 'new' keyword....
var myCircle = new Circle1(10);
console.log(myCircle);
var myOtherCircle = new Circle1(20);
console.log(myOtherCircle);


//----------------------------------------------------------
console.log(" ");
console.log("------------NEXT LECTURE NOTES---------");
console.log(" ");

//Object literals and "this"....
var literalCicle ={
	radius: 10,
	getArea: function() {
		var self = this;
		console.log(this);

		var increaseRadius = function() {
			//this.radius = 20;
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);
//Above increaseRadius() will not work unless 'var self' is generated.
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCicle.getArea());
