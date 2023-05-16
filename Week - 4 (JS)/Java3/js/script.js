function orderChickenWith(sideDish)
{
	if(sideDish === undefined)
	{
		sideDish = "whatever";
	}
	//sideDish = sideDish || "whatever!"
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();