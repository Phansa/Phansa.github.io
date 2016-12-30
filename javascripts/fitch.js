function fitch_one()
{	
	var one = fitch("P","operation", "Q", "operation_one");
	if(one)
	{
		solution(compare_to(one, "operation"));
	}
	else
	{
		solution(false);
	}
	//solution(compare_to(fitch("P","operation", "Q", "operation_one"), "operation"));
}
function fitch(a,b,c,d)
{
	//alert(document.getElementById("operation_one").value);
	var P = document.getElementById(a).value;
	if(!valid_input(P))
	{
		alert("Please enter valid input into " + a);
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
		alert("Please enter valid input into " + c);
		return false;
	}
    P = convert_to_bool(P);
	Q = convert_to_bool(Q);
	OP = convert_to_bool(OP);
	var e = document.getElementById(d).value;
	var result = evaluate(P,Q,e);
	return result;
}
function fitch2(bool1, op2, field2, operation_combo)
{
	var OP = document.getElementById(op2).value;
	if(!valid_input(OP))
	{
		alert("Please enter valid input into " + op2);
		return false;
	}
	var Q = document.getElementById(field2).value;
	if(!valid_input(Q))
	{
		alert("Please enter valid input into " + field2);
		return false;
	}
	var e = document.getElementById(operation_combo).value;
	return evaluate(bool1, Q, e);
}
function evaluate(P,Q,op)
{
	if(op == 1)
	{
		var result = (P || !Q);
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
		var result = ((P || !Q) && (!P || Q));
	}
	return result;
}
function compare_to(result, field)
{
	return(result && convert_to_bool(document.getElementById(field).value));
}
function fitch_two()
{
	var one = fitch("P1","OP11","Q1", "operation_two_one");
	if(one)
	{
		if(compare_to(one, "OP11"))
		{
			var two = fitch2(one, "OP12", "R1", "operation_two_two")
			if(two)
			{
				solution(compare_to(two, "OP12"));
			}
		}
		else
		{
			solution(false);
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
		alert("Correct!")
	}
	else
	{
		alert("Incorrect!");
	}
}