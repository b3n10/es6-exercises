function savings(budget, expense = 89, tithes = 10)
{
	return budget - (expense + tithes);
}

console.log("Savings: " + savings(100, 89, 10));
