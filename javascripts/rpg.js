var index = 1;
//The story of this role playing game is stored as a tree in this array. Index 2i is the left child and index 2i + 1 is the right child.
var branches =[];
//0
branches.push("You died! Press Choice 1 or Choice 2 to play again.");
//1-root
branches.push("Today is the day of the king's coronation and as the herald to the event it is of the utmost importance " +
	"to get from your house to the castle on time. You take your package, it's contents unkown to you, " +
	"and depart from your humble abode. You come across a crossing and on the left is the Whispering Forest, " +
	"rumoured to be haunted, and to the right is the King's Crossing path. You have heard whispers of " +
	"increased bandit activity along this path. " +
	"\nChoice 1- Go through the Whispering Forest." + 
	"\nChoice 2- Go through King's Crossing.");
//2-Forest 1
branches.push("You enter the Whispering Forest. An eerie mist creeps up on you. In the distance you can hear the beating of hooves. " +
	"You encounter a wellspring that is attended by a fairy. \" Who goes there, there are forbidden lands.\" " +
	"\nChoice 1 - \"I am a herald from seeking passage to the king's castle.\" " +
	"\nChoice 2 - \"I am wanderer merely lost in this forest. \"");
//3-Crossing 1
branches.push("You Embark upon the King's Crossing.");
//4-Forest 1L
branches.push("\"Oh a king's messenger I see. Tell me, what do you think of the kingdom? Isn't King Frederick just and wise?\"" +
	"\nChoice 1 - \"Why yes, I do think the king is very just and wise!\"" +
	"\nChoice 2 - \"Well I have my doubts about his treatment of those he considers lesser than him.\"");
//5-Forest 1R
branches.push("temp");
//6 - King's Crossing 1L
branches.push("temp");
//7 - King's Crossing 1R
branches.push("temp");
//8 - Forest 4L
branches.push("\"As I expected. We don't take kindly to the king around these parts!\" \n" +
	"You see a flash of light and suddenly you feel numb inside. The fairy starts to laugh and you can feel the life being sucked out " +
	"of you.\nYou died! Press Choice 1 or Choice 2 to play again.");
//9 - Forest 4R
banches.push
function left()
{
	//Death branches
	if(index == 8)
	{
		index = 1;
		document.getElementById("rpg").value = branches[index];
	}
	else
	{
		index = index * 2;
		document.getElementById("rpg").value = branches[index];
	}
}
function right()
{
	//Death branches
	if(index == 8)
	{
		index = 1;
		document.getElementById("rpg").value = branches[index];
	}
	else
	{
		index = index * 2 + 1;
		document.getElementById("rpg").value = branches[index];
	}
	//Death branches
}