function is_valid(input)
{
	var re = new RegExp("^[-0-9\.]+$");
	return re.test(input);
}
function add()
{
	calculate("add");
}
function multiply()
{
	calculate("mul");
}
function subtract()
{
	calculate("sub");
}
function division()
{
	calculate("div");
}
function calculate(operation)
{
	document.getElementById(operation + "_result").readonly = false;
	var left_number = document.getElementById("left_" + operation).value;
	var right_number = document.getElementById("right_" + operation).value;
	if(is_valid(left_number) && is_valid(right_number))
	{
		left_number = parseFloat(left_number);
		right_number = parseFloat(right_number);
		var result;
		if(operation == "add")
		{
			result = (left_number + right_number).toString();
		}
		else if(operation == "mul")
		{
			result = (left_number * right_number).toString();
		}
		else if(operation == "sub")
		{
			result = (left_number - right_number).toString();
		}
		else if(operation == "div")
		{
			result = (left_number / right_number).toString();
		}
		document.getElementById(operation + "_result").value = result;
	}
	else
	{
		alert("Invalid input. Please enter digits 0-9 or .");
	}
	document.getElementById(operation + "_result").readonly = true;
}
function dynamic_calculate()
{
	var equation = document.getElementById("equation").value;
	var result;
	document.getElementById("equate_result").readonly = false;
	document.getElementById("equate_result").value = result.toString();
	document.getElementById("equate_result").readonly = true;

}