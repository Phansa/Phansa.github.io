function fitch_one()
{
	var P = document.getElementById("P").value;
	if(!valid_input(P))
	{
		alert("Please enter valid input into P");
		return;
	}
	var OP = document.getElementById("operation").value;
	if(!valid_input(OP))
	{
		alert("Please enter valid input into Operation");
		return;
	}
	var Q = document.getElementById("Q").value;
	if(!valid_input(Q))
	{
		alert("Please enter valid input into Q");
		return;
	}
    P = convert_to_bool(P);
	Q = convert_to_bool(Q);
	OP = convert_to_bool(OP);
	var e = document.getElementById("operation_one").value;
	if(e == 1)
	{
		var result = (P || !Q);
	}
	if(e == 2)
	{
		var result = (P && Q);
	}
	if(e == 3)
	{
		var result = (P || Q);
	}
	if(e == 4)
	{
		var result = ((P || !Q) && (!P || Q));
	}
	solution(result, OP);
}
function valid_input(a)
{
	if(a != "T" && a != "t" && a != "f" && a != "F")
	{
		return false;
	}
	else
	{
		return true;
	}
}
function convert_to_bool(a)
{
	if(a == "T" || a == "t")
	{
		return true;
	}
	else
	{
		return false;
	}
}
function solution(a,b)
{
	if(a && b)
	{
		alert("Correct!");
	}
	else
	{
		alert("Incorrect!");
	}
}