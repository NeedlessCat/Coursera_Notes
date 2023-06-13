//Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
	console.log("Hello" + name);
};
array[3] ={course: "HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2](); //---> Undefined(as no name is passed.)
array[2]("Yaakov");
array[2](array[0]);//---> the name is stored in a var so called it.
console.log(array[3].course);

//Short hand array creation...
var names = ["Yaakov","John","Joe"];
// var names1 =[
// 	{name: "Yaakov"},
// 	{name: "John"},
// 	Joe];
// console.log(names1);

console.log(names);
for(var i=0;i<names.length;i++)
{
	console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i=0;i<names.lenght;i++)
{
	console.log("Hello" + names[i]);
}


//-----Problems with it...
var names2 =["Yaakov","John","Joe"];
var myObj = {
	name: "Yaakov",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};
for(var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}
for (var name in names2){
	console.log("Hello "+ names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2)
{
	console.log("Hello " + names2[name]);
}
//Here we see, greeting also become a property of the array(not different than others)..

//Closures....
function makeMultiplier (multiplier){
	//var multiplier =2; ----> Can't use so..
	function b(){
		console.log("Multiplier is: " + multiplier);
	}
	b();
	
	return{
		funtion (x){
			return multiplier*x;
		}
	};
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));