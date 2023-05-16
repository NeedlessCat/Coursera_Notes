//Object Creation....
var company = new Object();
company.name = "Facebook";
//console.log(company); ---> Works

//company.ceo.firstName ="Mark"; ----> NOT Works
//console.log(company); 

var a;
//a.hello="hello"; ----> ERROR: Can't set 'hello' here.

company.ceo = new Object();
company.ceo.FirstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);
console.log(company["name"]);

//Why two different Notations.....
company.$stock = 110;
// company.$stock of company = 110; -----> NOT Works
// company."$stock of company" = 110; ----> NOT Works
company["$stock of company"] =110;
console.log("Stock price is: " + company["$stock of company"]);

var stockPropName = "stock of company";
company[stockPropName] =110;
console.log("Stock price is: " + company[stockPropName]);

//------------------------------------------------------------------------------------

console.log("------------------------------NOTES FOR NEXT LECTURE-------------------");

//Better way: object literal..
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	//$stock: 110 ----> similar(not same) as below.
	"stock of company": 110;
};
console.log(facebook);
console.log(facebook.ceo.firstName);
