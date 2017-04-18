var x = 0;
var heads = 0;
var tails = 0;
function flip()
{
	x += 1;
	var textbox1 = document.getElementById("totalflips");
	var result = Math.floor(Math.random() * 2);
	if(result == 0)
	{
		document.getElementById("Coin").src = "images/Flipper/Heads.png"
		heads +=1;
	}
	else
	{
		document.getElementById("Coin").src = "images/Flipper/Tails.png"
		tails +=1;
	}
	textbox1.value = x;
	document.getElementById("heads").value = heads;
	document.getElementById("tails").value = tails;
}