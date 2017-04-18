//The story is stored as a tree using this node class. When a child is null that means the player has died
//and will go back to the start of the adventure.
class Node {
	constructor(left, right, value)
	{
		this.left = left;
		this.right = right;
		this.value = value;
	}
}
var root_node = new Node(null, null, "Today is the day of the king's coronation and as the herald to the event it is of the utmost importance " +
	"to get from your house to the castle on time. You take your package, it's contents unkown to you, " +
	"and depart from your humble abode. You come across a crossing and on the left is the Whispering Forest, " +
	"rumoured to be haunted, and to the right is the King's Crossing path. You have heard whispers of " +
	"increased bandit activity along this path. " +
	"\nChoice 1- Go through the Whispering Forest." + 
	"\nChoice 2- Go through King's Crossing.");
root_node.right = new Node(null, null, "You Embark upon the King's Crossing.");
root_node.left = new Node(null, null, "You enter the Whispering Forest. An eerie mist creeps up on you. In the distance you can hear the beating of hooves. " +
	"You encounter a wellspring that is attended by a fairy. \" Who goes there, there are forbidden lands.\" " +
	"\nChoice 1 - \"I am a herald from seeking passage to the king's castle.\" " +
	"\nChoice 2 - \"I am wanderer merely lost in this forest. \"");
root_node.left.left = new Node(null, null, "\"Oh a king's messenger I see. Tell me, what do you think of the kingdom? Isn't King Frederick just and wise?\"" +
	"\nChoice 1 - \"Why yes, I do think the king is very just and wise!\"" +
	"\nChoice 2 - \"Well I have my doubts about his treatment of those he considers lesser than him.\"");
root_node.left.left = new Node(null, null, "\"As I expected. We don't take kindly to the king around these parts!\" \n" +
	"You see a flash of light and suddenly you feel numb inside. The fairy starts to laugh and you can feel the life being sucked out " +
	"of you.\nYou died! Press Choice 1 or Choice 2 to play again.");
var current = root_node;
function left()
{
	if(current.left !== null)
	{
		current = current.left;
	}
	else
	{
		current = root_node;
	}
	document.getElementById("rpg").value = current.value;
}
function right()
{
	if(current.right !== null)
	{
		current = current.right;
	}
	else
	{
		current = root_node;
	}
	document.getElementById("rpg").value = current.value;
}