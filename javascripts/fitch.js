function fitch_one()
{	
	if(validate("P") && validate("Q") && validate("operation"))
	{
		var one = fitch("P", "Q", "operation_one");
		solution(compare_to(one, "operation"));
	}
}
function validate(a)
{
	var P = document.getElementById(a).value;
	if(!valid_input(P))
	{
		alert("Please enter valid input into " + a);
		return false;
	}
	return true;
}
function fitch(p,q,operator)
{
	var P;
	var Q;
	if(typeof p == 'string')
	{
		P = convert_to_bool(document.getElementById(p).value);
	}
	else
	{
		P = p;
	}
	if(typeof q == 'string')
	{
		Q = convert_to_bool(document.getElementById(q).value);
	}
	else
	{
		Q = q;
	}
	var e = document.getElementById(operator).value;
	var result = evaluate(P,Q,e);
	return result;
}
function evaluate(P,Q,op)
{
	if(op == 1)
	{
		var result = (!P || Q);
	}
	if(op == 2)
	{
		var result = (P && Q);
	}
	if(op == 3)
	{
		var result = (P || Q);
	}
	if(op == 4)
	{
		var result = ((!P || Q) && (P || !Q));
	}
	return result;
}
function compare_to(result, field)
{
	var field2 = document.getElementById(field).value;
	if(!result)
	{
		return (field2 == "F" || field2 == "f");
	}
	else
	{
		return (field2 == "T" || field2 == "t");
	}
}
function fitch_two()
{
	if(validate("P1") && validate("Q1") && validate("R1") && validate("OP11") && validate("OP12"))
	{
		var one = fitch("P1","Q1", "operation_two_one");
		if(solution(compare_to(one, "OP11")))
		{
			var two = fitch(one, "R1", "operation_two_two")
			solution(compare_to(two, "OP12"));
		}
	}
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
		alert("Correct!");
		return true;
	}
	else
	{
		alert("Incorrect!");
		return false;
	}
}