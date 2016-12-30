function fitch_one()
{	
	solution(fitch("P","operation", "Q", "operation_one"));
}
function fitch(a,b,c,d)
{
	var P = document.getElementById(a).value;
	if(!valid_input(P))
	{
		alert("Please enter valid input into" + a);
		return false;
	}
	var OP = document.getElementById(b).value;
	if(!valid_input(OP))
	{
		alert("Please enter valid input into " + b);
		return false;
	}
	var Q = document.getElementById(c).value;
	if(!valid_input(Q))
	{
		alert("Please enter valid input into" + c);
		return false;
	}
    P = convert_to_bool(P);
	Q = convert_to_bool(Q);
	OP = convert_to_bool(OP);
	var e = document.getElementById(d).value;
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
	return (result && OP);
}
function fitch_two()
{
	solution(fitch("P1","OP11","Q1", "operation_two_one") && fitch("Q1", "OP12", "R1", "operation_two_two"))
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
function solution(a)
{
	if(a)
	{
		alert("Correct!")
	}
	else
	{
		alert("Incorrect!");
	}
}