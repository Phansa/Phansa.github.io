function fitch_one()
{	
	//First makes sure all inputs are valid.
	if(validate("P") && validate("Q") && validate("operation"))
	{
		//Performs the evaluation through the fitch function then checks if it was the same as the
		//User's guess.
		var one = fitch("P", "Q", "operation_one");
		solution(compare_to(one, "operation"));
	}
}
//Same concept as fitch_one, but slightly more complicated since there are 3 variables.
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
//The only valid inputs are T,t,F,f and all other inputs will be rejected.
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
//Reads in the boolean values for P and Q as well as the operator to be assigned then
//passes control to the evaluate function and returns the result. (Similar to controller).
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
	return evaluate(P,Q,e);
}
//Converts the letters to boolean types.
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
//OP 1 is P -> Q, OP 2 is P ^ Q, OP 3 is P ∨ Q, OP 4 is P <-> Q.
function evaluate(P,Q,op)
{
	if(op == 1)
	{
		var result = (P && Q);
	}
	if(op == 2)
	{
		var result = (P || Q);
	}
	if(op == 3)
	{
		var result = (!P || Q);
	}
	if(op == 4)
	{
		var result = ((!P || Q) && (P || !Q));
	}
	return result;
}
//Compares the evalauted result to the user's guess.
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
//Based on the results of the conmpare_to function, tells the user if they were correct 
//or not. (Similar to view)
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