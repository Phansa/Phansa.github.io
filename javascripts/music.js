/*
Emoji Website - 
http://kaomoji.ru/en/
Overwatch Images -
overwaifu.net
*/
var x = 0;
var sources =[];
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229577943&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232534809&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229175825&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197702891&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/182847897&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/195103737&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230222227&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/210503956&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/234739832&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233798320&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/217970408&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233098110&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219805532&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232439344&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/134066335&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/211564666&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233998222&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209600622&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/214682233&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276247586&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/248047862&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/234235747&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/229432516&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/233118879&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293679921&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/157953486&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
//TO ADD - A.G. Cook Beuatiful. Find right images for it~
//sources.push("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/152774056&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true");
var song_titles = [];
song_titles.push("(◕‿◕✿) Le Cur - Cutiecore (◕‿◕✿)");
song_titles.push("(づ ◕‿◕ )づ Wasted - Lofts (づ ◕‿◕ )づ");
song_titles.push("(´• ω •`)ﾉ	 All I Ask - Skrillex Ft. Penny (´• ω •`)ﾉ	");
song_titles.push(".･ﾟﾟ･(／ω＼)･ﾟﾟ･. Lost - Scavenger Hunt (Lenno Remix) .･ﾟﾟ･(／ω＼)･ﾟﾟ･.");
song_titles.push("(=①ω①=) Cat Cafe - Yoshi & Komono (=①ω①=)");
song_titles.push("♡＼(￣▽￣)／♡ Begin Again - Purity Ring ♡＼(￣▽￣)／♡");
song_titles.push("╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ Waiting to Ignite - Goldroom ╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ");
song_titles.push("o( ❛ᴗ❛ )o Monday Night - Gregory Esayan (feat. Ai Takekawa) o( ❛ᴗ❛ )o");
song_titles.push("٩(｡•́‿•̀｡)۶	We All Fall Down - A-Track ft. Jamie Lidell ٩(｡•́‿•̀｡)۶	");
song_titles.push("(✿◕﹏◡)~★ Been You - Justin Bieber (✿◕﹏◡)~★");
song_titles.push("(^=◕ᴥ◕=^) Everything Is Embarassing - Sky Ferreira (^=◕ᴥ◕=^)");
song_titles.push("(⊃｡•́‿•̀｡)⊃	Wait - Tom Swoon, Paris & Simo (⊃｡•́‿•̀｡)⊃");
song_titles.push("(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄) Lush Life - Zara Larsson(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)");
song_titles.push("(/^-^(^ ^*)/ ♡ Fill Me In - Craig David (/^-^(^ ^*)/ ♡");
song_titles.push("( ◡‿◡ *)	Boyfriend - Justin Bieber ( ◡‿◡ *)");
song_titles.push("( o˘◡˘o) ┌iii┐ Run Away With Me - Carly Rae Jepsen ( o˘◡˘o) ┌iii┐");
song_titles.push("☆ﾐ(o*･ω･)ﾉ n33d u - kyubae ☆ﾐ(o*･ω･)ﾉ");
song_titles.push("(→_→)	Miniskirt - AOA (←_←)");
song_titles.push("ヽ(o´∀`)ﾉ♪♬ Can't Live Without You - Owl City ヽ(o´∀`)ﾉ♪♬");
song_titles.push("( o˘◡˘o) ┌iii┐ Shadow Man (ft. Saba, Smino & Phoelix) - Noname ( o˘◡˘o) ┌iii┐");
song_titles.push("⌒(o＾▽＾o)ノ	 Never Enough - Allie X ⌒(o＾▽＾o)ノ");
song_titles.push("o(>ω<)o Where We Are - Unknown o(>ω<)o");
song_titles.push("(*＾ω＾)人(＾ω＾*) Sad Machine - Porter Robinson (*＾ω＾)人(＾ω＾*)");
song_titles.push("(´♡‿♡`) Flowers - Nicky Night Time (´♡‿♡`)	");
song_titles.push("ヽ(￣ω￣(。。 )ゝ Setting Fires - The Chain Smokers ft Xlyo ヽ(￣ω￣(。。 )ゝ");
song_titles.push("〜(＞＜)〜 Cyan Teen - Aamourocean	〜(＞＜)〜");
//song_titles.push("(っ˘ω˘ς ) Beautiful - A.G. Cook (っ˘ω˘ς )");
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
	prev_x = x;
	x = Math.floor(Math.random() * sources.length);
	//Prevents the same song from being played twice.
	while(prev_x == x)
	{
		x = Math.floor(Math.random() * sources.length);
	}
	document.getElementById("CurrentSong").src = sources[x];
	document.getElementById("Song Title").innerText = song_titles[x];
	change();
}
//Standard image properties - around 500 by 500
function change()
{
	if(x == 0)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/djpon3.gif";	
		}
		else
		{
			//Source - https://thepowerzone.files.wordpress.com/2013/01/before-watchmen-minutemen-1.jpg
			document.getElementById("MainImage").src = "images/Music/Watchmen_Start.jpg";
		}
	}
	else if(x == 1)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/fionna.jpg";
		}
		else
		{
			document.getElementById("MainImage").src = "images/Music/BioshockCute.jpg";
		}
	}
	else if(x == 2)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/penny.jpg";
		}
		else
		{
			//Mass Effect Squad
			document.getElementById("MainImage").src = "http://40.media.tumblr.com/95998eb7964ebe7a0c1c14bd0813ebf4/tumblr_nw7kzuIY4B1sk51m7o1_r1_500.jpg";
		}
	}
	else if(x == 3)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			//Source - http://dazedimg.dazedgroup.netdna-cdn.com/640/azure/dazed-prod/1160/4/1164711.jpg
			document.getElementById("MainImage").src = "images/Music/yunglean.jpg";
		}
		else
		{
			//Source - http://overwaifu.net/upload/8cbc3bee40b5221ad3fcb1d70f673c39.jpg
			document.getElementById("MainImage").src = "images/Music/WholeHug.jpg";
		}
	}
	else if(x == 4)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			//Kawaii Rainbow Cat
			document.getElementById("MainImage").src ="https://s-media-cache-ak0.pinimg.com/originals/d4/e2/85/d4e285ca9d7d65116c42caffca2a7fb9.png";
		}
		else
		{
			//Source - http://img13.deviantart.net/0c93/i/2016/310/2/5/genesis___pharah_x_mercy_by_istarlove-daaacax.jpg
			document.getElementById("MainImage").src = "images/Music/PharahMercy.jpg";
		}
	}
	else if(x == 5)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			//Source http://static2.comicvine.com/uploads/original/13/132327/2840382-ozym_cv6_var.jpg
			document.getElementById("MainImage").src = "images/Music/ozymandias1.jpg";
		}
		else
		{
			//Ozymandius
			document.getElementById("MainImage").src = "http://1.images.spike.com/images/shows/all-access-weekly/Ozymandias.jpg?quality=0.91";
		}

	}
	else if(x == 6)
	{
		temp = Math.floor(Math.random() * 4);
		if(temp == 1)
		{
			//Source http://static.zerochan.net/Litten.full.1999835.jpg
			document.getElementById("MainImage").src = "images/Music/litten.jpg";
		}
		else if(temp == 2)
		{
			//Source http://pre09.deviantart.net/06a1/th/pre/f/2016/131/e/6/litten_by_hikariviny-da253cu.png
			document.getElementById("MainImage").src = "images/Music/litten2.png";
		}
		else if(temp == 3)
		{
			//Source - https://68.media.tumblr.com/f38eba29e940e930d97f386da6e51895/tumblr_o78h4yLW4V1ucwfuvo1_1280.gif
			document.getElementById("MainImage").src = "images/Music/litten_gif.gif";
		}
		else
		{
			//Source http://pre11.deviantart.net/9545/th/pre/i/2016/188/0/a/litten_for_president__by_arkadark-da95400.jpg
			document.getElementById("MainImage").src = "images/Music/litten3.jpg";
		}
	}
	else if(x == 7)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/DVA_Arcade.png";
		}
		else
		{
			document.getElementById("MainImage").src = "images/Music/PokeStars.png";
		}
	}
	else if(x == 8)
	{
		temp = Math.floor(Math.random() * 4);
		if(temp == 1)
		{
			//Claire De Lune
			document.getElementById("MainImage").src = "https://images-na.ssl-images-amazon.com/images/I/51nV51JA-pL._SS500.jpg";
		}
		else if(temp == 2)
		{
			//Thresh Heartseeker Ashe
			document.getElementById("MainImage").src = "https://s-media-cache-ak0.pinimg.com/236x/96/3c/7f/963c7fafb07063a6188eb860d3c965ee.jpg";
		}
		//Source - http://orig10.deviantart.net/669d/f/2016/170/5/f/overwatch__bunny_brigade_by_sangcoon-da6w7hb.png 
		else if(temp == 3)
		{
			document.getElementById("MainImage").src = "images/Music/DVA_Bunny.png";
		}
		//Source - https://static.lolwallpapers.net/2016/03/56e52d1b9375b-932x620.jpg
		else
		{
			document.getElementById("MainImage").src = "images/Music/shaco_main.jpg";
		}
	}
	else if(x == 9)
	{
		temp = Math.floor(Math.random() * 4);
		if(temp == 1)
		{
			//Dr Manhattan Mars
			document.getElementById("MainImage").src = "http://media.comicbook.com/2016/05/watchmen-dr--manhattan-hd-wallpapers-184238.jpg";
		}
		else if(temp == 2)
		{
			document.getElementById("MainImage").src = "images/Music/SombraRadiantHope.png";
		}
		else if(temp == 3)
		{
			document.getElementById("MainImage").src = "images/Music/BatmanCatwomanHush.jpg";
		}
		else
		{
			//Image source - https://www.nineoverten.com/wp-content/uploads/2012/09/SilkSpectre3.jpg
			document.getElementById("MainImage").src = "images/Music/Comedian.jpg";
		}
	}
	else if(x == 10)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			//Before Watchmen Laurie
			document.getElementById("MainImage").src = "http://68.media.tumblr.com/2e1627dfec4c81264bf6c56b0ff8c646/tumblr_n52m5uyQsp1qba3qpo1_500.png";
		}
		else
		{
			//Batman Catwoman Kawaii
			document.getElementById("MainImage").src = "https://s-media-cache-ak0.pinimg.com/736x/0c/70/bf/0c70bffe17bd387cd35d359769da0bd5.jpg";
		}
	}
	else if(x == 11)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			//My Neighbor Totoro Gif
			document.getElementById("MainImage").src = "https://secure.static.tumblr.com/9a374cd9a0ca7da0d98f1074c20b40b4/ntg1jvm/p0Lnmvxpy/tumblr_static_tumblr_static__640.gif";
		}
		else
		{
			//Source - http://vignette3.wikia.nocookie.net/wowwiki/images/6/64/Ysera-World-of-Warcraft-211082835_(in_Night_Elf_form).jpg/revision/latest?cb=20130527070313
			document.getElementById("MainImage").src = "images/Music/Ysera.jpg";
		}
	}
	else if(x == 12)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/UmaruChan.JPG";
		}
		else if(temp == 2)
		{
			//Me IRL
			document.getElementById("MainImage").src = "http://vignette2.wikia.nocookie.net/himoto-umaruchan/images/4/43/Dd240939d1c800ecb0890e3d3b6c6fc4.jpg/revision/latest?cb=20160206065140";
		}
		else
		{
			document.getElementById("MainImage").src = "images/Music/OniiChan.jpg";
		}
	}
	else if(x == 13)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			//Source - http://overwaifu.net/upload/98945e7ce52f273f40715012b45f1cce.png
			document.getElementById("MainImage").src = "images/Music/kiddva.png";
		}
		else
		{
			//Lucio DVA ship
			document.getElementById("MainImage").src = "https://68.media.tumblr.com/7ee7de45231a6d063865df9b4c6a7669/tumblr_oaoa596WsY1tk3yw3o1_500.jpg";
		}
	}
	else if(x == 14)
	{
		temp = Math.floor(Math.random() * 4);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/PharahMercy2.jpg";
		}
		else if(temp == 2)
		{
			document.getElementById("MainImage").src = "images/Music/deathparadesad.jpg";
		}
		else if(temp == 3)
		{
			//Komaru Kirie Kawaii
			document.getElementById("MainImage").src = "https://s-media-cache-ak0.pinimg.com/564x/14/91/d0/1491d01e7f6925314fb42db3906b60e9.jpg";
		}
		else
		{
			document.getElementById("MainImage").src = "images/Music/PharahMercy3.JPG";
		}
	}
	else if(x == 15)
	{
		document.getElementById("MainImage").src = "images/Music/ViolentDVA.jpg";
	}
	else if(x == 16)
	{

		temp = Math.floor(Math.random() * 3);
		//Source - http://hecoheio.deviantart.com/art/Dangerous-Woman-like-Dva-655382460
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/AriannaDVA.jpg";
		}
		//Source - http://hecoheio.deviantart.com/art/Mad-Love-658770884
		else if(temp == 2)
		{
			document.getElementById("MainImage").src = "images/Music/EvilDVA.jpg";
		}
		//Source - http://hecoheio.deviantart.com/art/YOU-ARE-MINE-659194072
		else
		{
			document.getElementById("MainImage").src = "images/Music/PharahMercyGenji.jpg";
		}
	}
	else if(x == 17)
	{
		temp = Math.floor(Math.random() * 2);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/DVA_Kawaii.jpg";
		}
		else
		{
			document.getElementById("MainImage").src = "images/Music/DVA_Kawaii2.jpeg";
		}
	}
	else if(x == 18)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			//Male Neko 1 - Blue Heart
			document.getElementById("MainImage").src = "http://orig11.deviantart.net/0a1f/f/2013/174/1/8/fixed_neko_male_by_sweet_flame-d6aa1zr.jpg";
		}
		else if(temp == 2)
		{
			//Male Neko 2 - Sun
			document.getElementById("MainImage").src = "https://s-media-cache-ak0.pinimg.com/originals/a3/a1/4a/a3a14a447d1fd26b0292d55c5441e92a.jpg";
		}
		else
		{
			//Female Neko 
			document.getElementById("MainImage").src = "http://data.whicdn.com/images/225658831/large.jpg"
		}
	}
	else if(x == 19)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			//Source - http://cdn.playbuzz.com/cdn/1a15dd57-5376-4797-88f4-b412898912a6/22b78326-b662-4199-8a05-ac63ad873419.png
			document.getElementById("MainImage").src = "images/Music/decim.png";
		}
		else if(temp == 2)
		{
			//Source - https://img2.goodfon.su/wallpaper/big/1/42/death-parade-art-koncert.jpg
			document.getElementById("MainImage").src = "images/Music/deathparade.jpg";
		}
		else
		{
			document.getElementById("MainImage").src = "images/Music/MercyBird.jpg";
		}
	}
	else if(x == 20)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/LeagueOTP.jpg";
		}
		else if(temp == 2)
		{
			document.getElementById("MainImage").src = "images/Music/DocMercy.jpg";
		}
		else
		{
			document.getElementById("MainImage").src = "images/Music/LunarKawaii.jpg";
		}
	}
	else if(x == 21)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			document.getElementById("MainImage").src = "images/Music/UmaruAnnie.jpg";
		}
		else if(temp == 2)
		{
			document.getElementById("MainImage").src = "images/Music/UmaruKat.jpg";
		}
		else
		{
			document.getElementById("MainImage").src = "images/Music/UmaruJinx.jpg";
		}
	}
	//Fix Scrolling text display for this page
	else if(x == 22)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			//Source - http://overwaifu.net/upload/0163ce1af24fe165b49b7bdcded4d747.png
			document.getElementById("MainImage").src = "images/Music/CasualPharah.png";
		}
		else if(temp == 2)
		{
			//Source - overwaifu.net/upload/8075f4424f2ea42934240e74532d0924.jpg
			document.getElementById("MainImage").src = "images/Music/AnaFamily.jpg";
		}
		else
		{
			//Source - http://overwaifu.net/upload/a2c8f0cc25947acc2bf9fbb5b5ad8342.jpg
			document.getElementById("MainImage").src = "images/Music/DVA_Dream.jpg";
		}
	}
	else if(x == 23)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			//Source - http://25.media.tumblr.com/a6e109f971102e8f4dd45a0f8ee3cb43/tumblr_mo568bl8ak1rmxhcfo1_400.png
			document.getElementById("MainImage").src = "images/Music/Kawaii Bunny.png";
		}
		else if(temp == 2)
		{
			document.getElementById("MainImage").src = "https://media.tenor.co/images/3254d98bf26b162bb4960483402918e7/tenor.gif";
		}
		else
		{
			document.getElementById("MainImage").src = "https://media.tenor.co/images/e64d607c05d016d1066fa5b82137be21/tenor.gif";
		}
	}
	else if(x == 24)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			//http://www.herocollector.com/uploads/media/wolverine-v-x-23.jpg
			document.getElementById("MainImage").src = "images/Music/wolverine-v-x-23.jpg";
		}
		else if(temp == 2)
		{
			//http://www.chaostrophic.com/wp-content/uploads/2016/11/Lucille-and-Negan-Heres-Negan-The-Walking-Dead-700x350.jpg
			document.getElementById("MainImage").src = "images/Music/Lucille Negan.jpg";

		}
		else
		{
			//Source - http://orig14.deviantart.net/e2a2/f/2012/135/6/f/talia_al_ghul_by_doubleleaf-d4ztnjb.jpg
			document.getElementById("MainImage").src = "images/Music/Talia Batman.jpg";
		}
	}
	else if(x == 25)
	{
		temp = Math.floor(Math.random() * 3);
		if(temp == 1)
		{
			//Source - http://pre14.deviantart.net/fe2b/th/pre/i/2016/312/b/3/dva_and_sombra_by_ukayamasaru-danspam.jpg
			document.getElementById("MainImage").src = "images/Music/Sombra DVA.jpg";
		}
		else if(temp == 2)
		{
			//Source - http://img09.deviantart.net/4f2a/i/2013/195/8/d/fanart_borderlands2_tiny_tina_and_flesh_stick_by_xar623-d6cyy8q.png
			document.getElementById("MainImage").src = "images/Music/Tiny Tina2.png";
		}
		else
		{
			document.getElementById("MainImage").src = "http://www.gamingcapacity.com/wp-content/uploads/2013/07/Tiny-Tina-2.jpg";
		}
	}
}
//FEATURES TO ADD
//Autoplay Functionality
//Ability to search by song name
//Ability to serach by song index
//List all song names
//Backup songs in case they get taken down from soundcloud
//
//SONGS TO ADD
//Hey You - https://soundcloud.com/indieshuffle/tyler-the-creator-toro-y-moi
//So Typical - https://soundcloud.com/see-you-swoon/sotypical
//Another Night - https://soundcloud.com/cooltweens/another-night
//I Love Me - https://soundcloud.com/internetparty/iloveme
//All That - https://soundcloud.com/coolteens/all-that
//There 4 u - https://soundcloud.com/kittynxc/there-4-u
//Tori No Uta - https://soundcloud.com/slugabed/tori-no-uta