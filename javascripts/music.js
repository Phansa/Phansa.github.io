var x = 0;
var sources =[];
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229577943&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232534809&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229175825&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197702891&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
var song_titles = [];
song_titles.push("You are listening to Le Coeur - Cutiecore");
song_titles.push("You are listening to Wasted - Lofts");
song_titles.push("You are listening to All I Ask - Essence");
song_titles.push("You are listening to Lost - Fan Fiction");
function next()
{
	if(x < sources.length - 1)
	{
		x += 1;
	}
	else
	{
		x = 0;
	}
	document.getElementById("CurrentSong").src = sources[x];
	document.getElementById("Song Title").innerText = song_titles[x];
}
function prev()
{
	if(x > 0)
	{
		x -= 1;
	}
	else
	{
		x = sources.length - 1;
	}
	document.getElementById("CurrentSong").src = sources[x];
	document.getElementById("Song Title").innerText = song_titles[x];
}