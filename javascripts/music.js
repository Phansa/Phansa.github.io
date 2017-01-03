//Emoji Website - http://kaomoji.ru/en/
var x = 0;
var sources =[];
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229577943&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232534809&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229175825&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197702891&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182847897&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195103737&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230222227&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
var song_titles = [];
song_titles.push("(◕‿◕✿) Le Cur - Cutiecore (◕‿◕✿)");
song_titles.push("(づ ◕‿◕ )づ Wasted - Lofts (づ ◕‿◕ )づ");
song_titles.push("(´• ω •`)ﾉ	 All I Ask - Essence (´• ω •`)ﾉ	");
song_titles.push(".･ﾟﾟ･(／ω＼)･ﾟﾟ･. Lost - Fan Fiction .･ﾟﾟ･(／ω＼)･ﾟﾟ･.");
song_titles.push("(=①ω①=) Cat Cafe - Yoshi & Komono (=①ω①=)");
song_titles.push("♡＼(￣▽￣)／♡ Begin Again - Fan Fiction ♡＼(￣▽￣)／♡");
song_titles.push("╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ	 Cool Teens - Ignite ╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ");
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
	change();
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
	change();
}
function random()
{
	x = Math.floor(Math.random() * sources.length);
	document.getElementById("CurrentSong").src = sources[x];
	document.getElementById("Song Title").innerText = song_titles[x];
	change();
}
function change()
{
	if(x == 0)
	{
		document.getElementById("MainImage").src = "images/Music/djpon3.gif";	
	}
	else if(x == 1)
	{
		document.getElementById("MainImage").src = "images/Music/fionna.jpg";
	}
	else if(x == 2)
	{
		document.getElementById("MainImage").src = "images/Music/penny.jpg";
	}
	else if(x == 3)
	{
		//Source - http://dazedimg.dazedgroup.netdna-cdn.com/640/azure/dazed-prod/1160/4/1164711.jpg
		document.getElementById("MainImage").src = "images/Music/yunglean.jpg";
	}
	else if(x == 4)
	{
		document.getElementById("MainImage").src ="https://s-media-cache-ak0.pinimg.com/originals/d4/e2/85/d4e285ca9d7d65116c42caffca2a7fb9.png";
	}
	else if(x == 5)
	{
		if(Math.floor(Math.random() * 2) == 1)
		{
			//Source http://static2.comicvine.com/uploads/original/13/132327/2840382-ozym_cv6_var.jpg
			document.getElementById("MainImage").src = "images/Music/ozymandias1.jpg";
		}
		else
		{
			document.getElementById("MainImage").src = "http://1.images.spike.com/images/shows/all-access-weekly/Ozymandias.jpg?quality=0.91";
		}

	}
	else if(x == 6)
	{
		var temp = Math.floor(Math.random() * 3);
		if(temp == 0)
		{
			//Source http://static.zerochan.net/Litten.full.1999835.jpg
			document.getElementById("MainImage").src = "images/Music/litten.jpg";
		}
		else if(temp == 1)
		{
			//Source http://pre09.deviantart.net/06a1/th/pre/f/2016/131/e/6/litten_by_hikariviny-da253cu.png
			document.getElementById("MainImage").src = "images/Music/litten2.png";
		}
		else if(temp == 2)
		{
			//Source http://pre11.deviantart.net/9545/th/pre/i/2016/188/0/a/litten_for_president__by_arkadark-da95400.jpg
			document.getElementById("MainImage").src = "images/Music/litten3.jpg";
		}
	}
}