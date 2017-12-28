/*
Emoji Website - 
http://kaomoji.ru/en/
Overwatch Images -
overwaifu.net
*/
var x = 0;
var sources =[];
var widget1;
//Forever - Danny L Harle
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	231736804&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;\
	visual=true');
//Wasted - Lofts
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	232534809&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//All I Ask - Skrillex Ft. Penny
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	229175825&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Lost - Scavenger Hunt (Lenno Remix)
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	197702891&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Cat Cafe - Yoshi & Komono
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	182847897&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Begin Again - Purity Ring
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	195103737&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Waiting to Ignite - Goldroom
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	230222227&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Monday Night - Gregory Esayan (feat. Ai Takekawa)
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	210503956&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//We All Fall Down - A-Track ft. Jamie Lidell
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	234739832&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Been You - Justin Bieber
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	233798320&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Everything Is Embarassing - Sky Ferreira
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	217970408&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Wait - Tom Swoon, Paris & Simo
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	233098110&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Lush Life - Zara Larsson
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	219805532&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Fill Me In - Craig David
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	232439344&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Boyfriend - Justin Bieber
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	134066335&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//All That - Carly Rae Jepsen
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	209714540&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//n33d u - kyubae
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	233998222&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Miniskirt - AOA
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	209600622&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Can't Live Without You - Owl City
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	214682233&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Shadow Man (ft. Saba, Smino & Phoelix) - Noname
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	276247586&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Never Enough - Allie X
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	248047862&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Where We Are - Unknown
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	234235747&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Sad Machine - Porter Robinson
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	229432516&amp;color=ff5500&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false');
//Flowers - Nicky Night Time
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	233118879&amp;auto_play=true&amp;hide_related=false&amp;\
	show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true');
//Setting Fires - The Chain Smokers ft Xlyo
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	293679921&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Cyan Teen - Aamourocean
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	157953486&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Hudson Mohawke - Very First Breath ft. Irfane
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	232957337&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
//Carly Rae Jepsen - Gimmie Love
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	219556231&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
// Slugabed - Another Chance 2k14
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	135466533&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;visual=true');
// Beautiful - A.G. Cook
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
152774056&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
show_user=true&amp;show_reposts=false&amp;visual=true');
// Cutiecore - 2 B Alive
sources.push('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/\
	287518765&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;\
	show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true');
var songTitles = [];
songTitles.push('(◕‿◕✿) Forever - Danny L Harle  (◕‿◕✿)');
songTitles.push('(づ ◕‿◕ )づ Wasted - Lofts (づ ◕‿◕ )づ');
songTitles.push('(´• ω •`)ﾉ	 All I Ask - Skrillex Ft. Penny (´• ω •`)ﾉ	');
songTitles.push('.･ﾟﾟ･(／ω＼)･ﾟﾟ･. Lost - Scavenger Hunt (Lenno Remix) .･ﾟﾟ･(／ω＼)･ﾟﾟ･.');
songTitles.push('(=①ω①=) Cat Cafe - Yoshi & Komono (=①ω①=)');
songTitles.push('♡＼(￣▽￣)／♡ Begin Again - Purity Ring ♡＼(￣▽￣)／♡');
songTitles.push('ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚ Waiting to Ignite - Goldroom ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚');
songTitles.push('o( ❛ᴗ❛ )o Monday Night - Gregory Esayan (feat. Ai Takekawa) o( ❛ᴗ❛ )o');
songTitles.push('٩(｡•́‿•̀｡)۶	We All Fall Down - A-Track ft. Jamie Lidell ٩(｡•́‿•̀｡)۶	');
songTitles.push('(✿◕﹏◡)~★ Been You - Justin Bieber (✿◕﹏◡)~★');
songTitles.push('(^=◕ᴥ◕=^) Everything Is Embarassing - Sky Ferreira (^=◕ᴥ◕=^)');
songTitles.push('(⊃｡•́‿•̀｡)⊃	Wait - Tom Swoon, Paris & Simo (⊃｡•́‿•̀｡)⊃');
songTitles.push('(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄) Lush Life - Zara Larsson(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)');
songTitles.push('(/^-^(^ ^*)/ ♡ Fill Me In - Craig David (/^-^(^ ^*)/ ♡');
songTitles.push('( ◡‿◡ *)	Boyfriend - Justin Bieber ( ◡‿◡ *)');
songTitles.push('( o˘◡˘o) ┌iii┐ All That - Carly Rae Jepsen ( o˘◡˘o) ┌iii┐');
songTitles.push('☆ﾐ(o*･ω･)ﾉ n33d u - kyubae ☆ﾐ(o*･ω･)ﾉ');
songTitles.push('(→_→)	Miniskirt - AOA (←_←)');
songTitles.push('ヽ(o´∀`)ﾉ♪♬ Can\'t Live Without You - Owl City ヽ(o´∀`)ﾉ♪♬');
songTitles.push('( o˘◡˘o) ┌iii┐ Shadow Man (ft. Saba, Smino & Phoelix) - Noname ( o˘◡˘o) \
	┌iii┐');
songTitles.push('⌒(o＾▽＾o)ノ Never Enough - Allie X ⌒(o＾▽＾o)ノ');
songTitles.push('o(>ω<)o Where We Are - Unknown o(>ω<)o');
songTitles.push('(*＾ω＾)人(＾ω＾*) Sad Machine - Porter Robinson (*＾ω＾)人(＾ω＾*)');
songTitles.push('(´♡‿♡`) Flowers - Nicky Night Time (´♡‿♡`)	');
songTitles.push('ヽ(￣ω￣(。。 )ゝ Setting Fires - The Chain Smokers ft Xlyo ヽ(￣ω￣(。。 )ゝ');
songTitles.push('〜(＞＜)〜 Cyan Teen - Aamourocean	〜(＞＜)〜');
songTitles.push('♡( ◡‿◡ ) Very First Breath - Hudson Mohawke ft. Irfane ♡( ◡‿◡ )');
songTitles.push('(/^-^(^ ^*)/ ♡ Gimmie Love - Carly Rae Jepsen  (/^-^(^ ^*)/ ♡	');
songTitles.push('(๑˃ᴗ˂)ﻭ Another Chance - Roger Sanchez (๑˃ᴗ˂)ﻭ');
songTitles.push('(っ˘ω˘ς ) Beautiful - A.G. Cook (っ˘ω˘ς )');
songTitles.push('(~˘▽˘)~ Puppet - To Be Alive (ft. Aaron Richards) ~(˘▽˘~)');

function initialize()
{
	x = Math.floor(Math.random() * sources.length);
	$('#CurrentSong').attr('src', sources[x]);
	widget1 = SC.Widget('CurrentSong', changeImage());
	widget1.bind(SC.Widget.Events.FINISH, function(player, data)
	{
		next();
	});
}

function changeSong(source, title)
{
	$('#CurrentSong').attr('src', source);
	widget1 = SC.Widget('CurrentSong');
	widget1.bind(SC.Widget.Events.FINISH, function(player, data)
	{
		next();
	});
	changeImage();
	$('#SongTitle').text(title);
}

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
	changeSong(sources[x], songTitles[x]);

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
	changeSong(sources[x], songTitles[x]);
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
	changeSong(sources[x], songTitles[x]);
}

// Pauses or plays the song when space is pressed
function pause(isPaused)
{
	if(isPaused)
	{
		widget1.play();
	}
	else
	{
		widget1.pause();
	}
}

//Taken from https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
document.onkeydown = function(e) {
	switch (e.keyCode)
	{
		case 32:
			e.preventDefault();
			widget1.isPaused(pause);
			break;
		case 37:
			e.preventDefault();	
			prev();
			break;
		case 39:
			e.preventDefault();
			next();
			break;
		case 82:
			e.preventDefault();
			random();
			break;
	}
}
function generateRandom(upperLimit)
{
	return Math.floor(Math.random() * upperLimit);
}

//Standard image properties are around 500 by 500
function changeImage()
{
	switch(x)
	{
		case 0:
			switch(generateRandom(3))
			{
				case 0:
					$('#MainImage').attr('src', 'images/Music/HappyFrog.JPG');
					break;
				case 1:
					$('#MainImage').attr('src', 'images/Music/HiPotion.JPG');
					break;
				case 2:
					$('#MainImage').attr('src', 'images/Music/Doodle.jpg');
					break;
			}
			break;
		case 1:
			switch(generateRandom(2))
			{
				case 0:
					$('#MainImage').attr('src','images/Music/Fionna.jpg');
					break;
				case 1:
					$('#MainImage').attr('src','images/Music/BioshockCute.jpg');
					break;
			}
			break;
		case 2:
			switch(generateRandom(2))
			{
				case 0:
					$('#MainImage').attr('src','images/Music/Penny.jpg');
					break;
				case 1:
					/* Source - http://40.media.tumblr.com/95998eb7964ebe7a0c1c14bd0813
					ebf4/tumblr_nw7kzuIY4B1sk51m7o1_r1_500.jpg */
					$('#MainImage').attr('src','images/Music/MassEffectSquad.jpg');
					break;
			}
			break;
		case 3:
			switch(generateRandom(2))
			{
				case 0:
					/* Source - http://dazedimg.dazedgroup.netdna-cdn.com/640/azure/
					dazed-prod/1160/4/1164711.jpg*/
					$('#MainImage').attr('src','images/Music/YungLean.jpg');
					break;
				case 1:
					/* Source - http://overwaifu.net/upload/8cbc3bee40b5221ad3fcb1d70f673
					c39.jpg */
					$('#MainImage').attr('src','images/Music/WholeHug.jpg');
					break;
			}
			break;
		case 4:
			switch(generateRandom(2))
			{
				case 0:
					/* Source - https://i.pinimg.com/originals/d4/e2/85/d4e285ca9d7d65
					116c42caffca2a7fb9.png*/
					$('#MainImage').attr('src','images/Music/RainbowNeko.png');
					break;
				case 1:
					/* Source - http://img13.deviantart.net/0c93/i/2016/310/2/5/genesis_
					__pharah_x_mercy_by_istarlove-daaacax.jpg */
					$('#MainImage').attr('src','images/Music/PharahMercy.jpg');
					break;
			}
			break;
		case 5:
			switch(generateRandom(2))
			{
				case 0:
					/* Source http://static2.comicvine.com/uploads/original/13/132327/
					2840382-ozym_cv6_var.jpg */
					$('#MainImage').attr('src','images/Music/Ozymandias1.jpg');
					break;
				case 1:
					/* Source - http://1.images.spike.com/images/shows/all-access-weekly/
					Ozymandias.jpg?quality=0.91 */
					$('#MainImage').attr('src','images/Music/Ozymandias2.jpg');
					break;
			}
			break;
		case 6:
			switch(generateRandom(4))
			{
				case 0:
					// Source http://static.zerochan.net/Litten.full.1999835.jpg
					$('#MainImage').attr('src','images/Music/Litten.jpg');
					break;
				case 1:
					/* Source http://pre09.deviantart.net/06a1/th/pre/f/2016/131/e/6/
					litten_by_hikariviny-da253cu.png */
					$('#MainImage').attr('src','images/Music/Litten2.png');
					break;
				case 2:
					/* Source - https://68.media.tumblr.com/f38eba29e940e930d97f386da6e5
					1895/tumblr_o78h4yLW4V1ucwfuvo1_1280.gif */
					$('#MainImage').attr('src','images/Music/Litten.gif');
					break;
				case 3:
					/* Source http://pre11.deviantart.net/9545/th/pre/i/2016/188/0/a/
					litten_for_president__by_arkadark-da95400.jpg */
					$('#MainImage').attr('src','images/Music/Litten3.jpg');
					break;
			}
			break;
		case 7:
			switch(generateRandom(2))
			{
				case 0:
					$('#MainImage').attr('src','images/Music/DVAArcade.png');
					break;
				case 1:
					$('#MainImage').attr('src','images/Music/PokeStars.png');
					break;
			}
			break;
		case 8:
			switch(generateRandom(4))
			{
				case 0:
					/* Source - https://images-na.ssl-images-amazon.com/images/I/51nV51JA
					-pL._SS500.jpg */
					$('#MainImage').attr('src','images/Music/ClaireDeLune.jpg');
					break;
				case 1:
					/* Source - https://i.pinimg.com/236x/96/3c/7f/963c7fafb07063a6188eb
					860d3c965ee.jpg */
					$('#MainImage').attr('src','images/Music/ThreshAshe.jpg');
					break;
				case 2:
					/* Source - http://orig10.deviantart.net/669d/f/2016/170/5/f/overwatch
					__bunny_brigade_by_sangcoon-da6w7hb.png */
					$('#MainImage').attr('src','images/Music/DVABunny.png');
					break;
				case 3:
					/* Source - https://static.lolwallpapers.net/2016/03/56e52d1b9375b-932
					x620.jpg */
					$('#MainImage').attr('src','images/Music/Shaco.jpg');
					break;
			}
			break;
		case 9:
			switch(generateRandom(4))
			{
				case 0:
					/* Source - http://media.comicbook.com/2016/05/watchmen-dr--manhattan
					-hd-wallpapers-184238.jpg */
					$('#MainImage').attr('src','images/Music/DrManhattan.jpg');
					break;
				case 1:
					$('#MainImage').attr('src','images/Music/SombraRadiantHope.png');
					break;
				case 2:
					$('#MainImage').attr('src','images/Music/BatmanCatwomanHush.jpg');
					break;
				case 3:
					/* Source - https://www.nineoverten.com/wp-content/uploads/2012/09/
					SilkSpectre3.jpg */
					$('#MainImage').attr('src','images/Music/Comedian.jpg');
					break;
			}
			break;
		case 10:
			switch(generateRandom(2))
			{
				case 0:
					/* Source - http://68.media.tumblr.com/2e1627dfec4c81264bf6c56b0ff8c
					646/tumblr_n52m5uyQsp1qba3qpo1_500.png */
					$('#MainImage').attr('src','images/Music/Laurie.png');
					break;
				case 1:
					/* Source - https://i.pinimg.com/736x/0c/70/bf/0c70bffe17bd387cd35d3
					59769da0bd5.jpg*/
					$('#MainImage').attr('src','images/Music/BatmanKawaii.jpg');
					break;
			}
			break;
		case 11:
			switch(generateRandom(2))
			{
				case 0:
					/* Source - https://secure.static.tumblr.com/9a374cd9a0ca7da0d98f1074
					c20b40b4/ntg1jvm/p0Lnmvxpy/tumblr_static_tumblr_static__640.gif*/
					$('#MainImage').attr('src','images/Music/MyNeighborTotoro.gif');
					break;
				case 1:
					/* Source - http://vignette3.wikia.nocookie.net/wowwiki/images/6/64/
					Ysera-World-of-Warcraft-211082835_(in_Night_Elf_form).jpg/revision/
					latest?cb=20130527070313 */
					$('#MainImage').attr('src','images/Music/Ysera.jpg');
					break;
			}	
			break;
		case 12:
			switch(generateRandom(3))
			{
				case 0:
					$('#MainImage').attr('src','images/Music/UmaruChan.JPG');
					break;
				case 1:
					/* Source - http://vignette2.wikia.nocookie.net/himoto-umaruchan/
					images/4/43/Dd240939d1c800ecb0890e3d3b6c6fc4.jpg/revision/latest?cb=
					20160206065140*/
					$('#MainImage').attr('src','images/Music/UmaruLounging.jpg');
					break;
				case 2:
					$('#MainImage').attr('src','images/Music/OniiChan.jpg');
					break;
			}
			break;
		case 13:
			switch(generateRandom(2))
			{
				case 0:
					/* Source - http://overwaifu.net/upload/98945e7ce52f273f40715012b45f
					1cce.png */
					$('#MainImage').attr('src','images/Music/KidDVA.png');
					break;
				case 1:
					/* Source - https://68.media.tumblr.com/7ee7de45231a6d063865df9b4c6a
					7669/tumblr_oaoa596WsY1tk3yw3o1_500.jpg*/
					$('#MainImage').attr('src','images/Music/LucioDVAShip.jpg');
					break;
			}
			break;
		case 14:
			switch(generateRandom(4))
			{
				case 0:
					$('#MainImage').attr('src','images/Music/PharahMercy2.jpg');
					break;
				case 1:
					$('#MainImage').attr('src','images/Music/DeathParadeSad.jpg');
					break;
				case 2:
					/* Source - https://i.pinimg.com/564x/14/91/d0/1491d01e7f6925314fb
					42db3906b60e9.jpg*/
					$('#MainImage').attr('src','images/Music/KomaruKirieKawaii.jpg');
					break;
				case 3:
					$('#MainImage').attr('src','images/Music/PharahMercy3.JPG');
					break;
			}
			break;
		case 15:
			$('#MainImage').attr('src','images/Music/ViolentDVA.jpg');
			break;
		case 16:
			switch(generateRandom(3))
			{
				case 0:
					/* Source - http://hecoheio.deviantart.com/art/Dangerous-Woman-
					like-Dva-655382460 */
					$('#MainImage').attr('src','images/Music/AriannaDVA.jpg');
					break;
				case 1:
					// Source - http://hecoheio.deviantart.com/art/Mad-Love-658770884
					$('#MainImage').attr('src','images/Music/EvilDVA.jpg');
					break;
				case 2:
					// Source - http://hecoheio.deviantart.com/art/YOU-ARE-MINE-659194072
					$('#MainImage').attr('src','images/Music/PharahMercyGenji.jpg');
					break;
			}
			break;
		case 17:
			switch(generateRandom(2))
			{
				case 0:
					$('#MainImage').attr('src','images/Music/DVAKawaii.jpg');
					break;
				case 1:
					$('#MainImage').attr('src','images/Music/DVAKawaii2.jpeg');
					break;
			}
			break;
		case 18:
			switch(generateRandom(3))
			{
				case 0:
					/*Source - http://orig11.deviantart.net/0a1f/f/2013/174/1/8/fixed
					_neko_male_by_sweet_flame-d6aa1zr.jpg */
					$('#MainImage').attr('src','images/Music/BlueHeartNeko.jpg');
					break;
				case 1:
					/* Source - https://i.pinimg.com/originals/a3/a1/4a/a3a14a447d1fd26
					b0292d55c5441e92a.jpg */
					$('#MainImage').attr('src','images/Music/SunNeko.jpg');
					break;
				case 2:
					// Source - http://data.whicdn.com/images/225658831/large.jpg
					$('#MainImage').attr('src','images/Music/NekoHeart.jpg');
					break;
			}
			break;
		case 19:
			switch(generateRandom(3))
			{
				case 0:
					/* Source - http://cdn.playbuzz.com/cdn/1a15dd57-5376-4797-88f4-
					b412898912a6/22b78326-b662-4199-8a05-ac63ad873419.png */
					$('#MainImage').attr('src','images/Music/Decim.png');
					break;
				case 1:
					/* Source - https://img2.goodfon.su/wallpaper/big/1/42/death-parade
					-art-koncert.jpg */
					$('#MainImage').attr('src','images/Music/DeathParade.jpg');
					break;
				case 2:
					$('#MainImage').attr('src','images/Music/MercyBird.jpg');
					break;
			}
			break;
		case 20:
			switch(generateRandom(3))
			{
				case 0:
					$('#MainImage').attr('src','images/Music/LeagueOTP.jpg');
					break;
				case 1:
					$('#MainImage').attr('src','images/Music/DocMercy.jpg');
					break;
				case 2:
					$('#MainImage').attr('src','images/Music/LunarKawaii.jpg');
					break;
			}
			break;
		case 21:
			switch(generateRandom(3))
			{
				case 0:
					$('#MainImage').attr('src','images/Music/UmaruAnnie.jpg');
					break;
				case 1:
					$('#MainImage').attr('src','images/Music/UmaruKat.jpg');
					break;
				case 2:
					$('#MainImage').attr('src','images/Music/UmaruKat.jpg');
					break;
			}
			break;
		//Fix Scrolling text display for this page
		case 22:
			switch(generateRandom(3))
			{
				case 0:
					/* Source - http://overwaifu.net/upload/0163ce1af24fe165b49b7bdcded
					4d747.png */
					$('#MainImage').attr('src','images/Music/CasualPharah.png');
					break;
				case 1:
					//Source - overwaifu.net/upload/8075f4424f2ea42934240e74532d0924.jpg
					$('#MainImage').attr('src','images/Music/AnaFamily.jpg');
					break;
				case 2:
					/* Source - http://overwaifu.net/upload/a2c8f0cc25947acc2bf9fb
					b5b5ad8342.jpg */
					$('#MainImage').attr('src','images/Music/DVADream.jpg');
					break;
			}
			break;
		case 23:
			switch(generateRandom(3))
			{
				case 0:
					/* Source - http://25.media.tumblr.com/a6e109f971102e8f4dd45a0f8ee3
					cb43/tumblr_mo568bl8ak1rmxhcfo1_400.png */
					$('#MainImage').attr('src','images/Music/BunnyKawaii.png');
					break;
				case 1:
					/* Source - https://media.tenor.co/images/3254d98bf26b162bb49604834
					02918e7/tenor.gif */
					$('#MainImage').attr('src','images/Music/KawaiiNeko.gif');
					break;
				case 2:
					/* Source - https://media.tenor.co/images/e64d607c05d016d1066fa5b8213
					7be21/tenor.gif */
					$('#MainImage').attr('src','images/Music/KawaiiNeko2.gif');
					break;
			}
			break;
		case 24:
			switch(generateRandom(3))
			{
				case 0:
					/* Source - http://www.herocollector.com/uploads/media/wolverine
					-v-x-23.jpg */
					$('#MainImage').attr('src','images/Music/wolverine-v-x-23.jpg');
					break;
				case 1:
					/* Source - http://2.bp.blogspot.com/-HfNts1pt7as/WYHpc35G6kI/AAAAAAA
					AFds/zvKxpK4-k4UFu02KQ4L-GxeYymUOoXPdgCHMYCw/s1600/RCO011.jpg */
					$('#MainImage').attr('src','images/Music/LucilleNegan.jpg');
					break;
				case 2:
					/*Source - http://orig14.deviantart.net/e2a2/f/2012/135/6/f/talia_
					al_ghul_by_doubleleaf-d4ztnjb.jpg */
					$('#MainImage').attr('src','images/Music/TaliaBatman.jpg');
					break;
			}
			break;
		case 25:
			switch(generateRandom(3))
			{
				case 0:
					/*Source - http://pre14.deviantart.net/fe2b/th/pre/i/2016/312/b/3/
					dva_and_sombra_by_ukayamasaru-danspam.jpg */
					$('#MainImage').attr('src', 'images/Music/SombraDVA.jpg');
					break;
				case 1:
					/*Source - http://img09.deviantart.net/4f2a/i/2013/195/8/d/fanart
					_borderlands2_tiny_tina_and_flesh_stick_by_xar623-d6cyy8q.png */
					$('#MainImage').attr('src','images/Music/TinyTina2.png');
					break;
				case 2:
					/* Source - https://i.pinimg.com/originals/d9/fe/38/d9fe38a78027fed3d
					620c7f06f693d34.jpg */
					$('#MainImage').attr('src', 'images/Music/TinyTina3.jpg');
					break;
			}
			break;
		case 26:
			switch(generateRandom(4))
			{
				case 0:
				/* Source - https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480
				/e35/c0.60.904.904/12534248_1558215314497691_715907693_n.jpg?ig_cache_key
				=MTE3NTg4Nzk2Mjc2MTMzMTYwNQ%3D%3D.2.c */
				$('#MainImage').attr('src', 'images/Music/JinxKawaii.jpg');
				break;
				case 1:
					/* Source - http://68.media.tumblr.com/1336d3512207b31869bf1259dbfe41ad/
					tumblr_n43e2rnar31tof9kfo2_500.png */
					$('#MainImage').attr('src', 'images/Music/JinxZiggs.png');
					break;
				case 2:
					/* Source - https://3.bp.blogspot.com/-NgdpwihfRVE/V-AWfWBy56I/
					AAAAAAAAUlE/v3afFuQR104QDxtTpOolD-MaJ2peU-HDACEw/s1600/shatter.jpg */
					$('#MainImage').attr('src', 'images/Music/Shatter.jpg');
					break;
				case 3:
					/* Source - https://files.gamebanana.com/img/ico/sprays/57f6ed815a02a.gif
					*/
					$('#MainImage').attr('src', 'images/Music/MomijiDance.gif');
					break;	
			}
			break;
		case 27:
			switch(generateRandom(4))
			{
				case 0:
					$('#MainImage').attr('src', 'images/Music/AbsentFriends.jpg');
					break;
				case 1:
					$('#MainImage').attr('src', 'images/Music/PharahMercyPortrait.jpg');
					break;
				case 2:
					$('#MainImage').attr('src', 'images/Music/DVAHeart.jpg');
					break;
				case 3:
					$('#MainImage').attr('src', 'images/Music/TracerFionna.jpg');
					break;
			}
			break;
		case 28:
			switch(generateRandom(3))
			{
				case 0:
					$('#MainImage').attr('src', 'images/Music/WinterNeko.jpg');
					break;
				case 1:
					$('#MainImage').attr('src', 'images/Music/PharahMercyPachimaru.jpg');
					break;
				case 2:
					$('#MainImage').attr('src', 'images/Music/Plushies.jpg');
					break;
			}
			break;
		case 29:
			switch(generateRandom(2))
			{
				case 0:
					$('#MainImage').attr('src', 'images/Music/Djpon3.gif');	
					break;
				case 1:
					/* Source - https://thepowerzone.files.wordpress.com/2013/01/before-
					watchmen-minutemen-1.jpg */
					$('#MainImage').attr('src','images/Music/Watchmen_Start.jpg');
					break;
			}
			break;
		case 30:
			switch(generateRandom(3))
			{
				case 0:
					$('#MainImage').attr('src', 'images/Music/aiohabn.jpg');
					break;	
				case 1:
					/* Source - https://pa1.narvii.com/6464/c39154f39e542a4f03cf37398
					d93ad45a8c19fe7_hq.gif */
					$('#MainImage').attr('src', 'images/Music/Kanna.gif');	
					break;

				case 2:
					/* Source - https://78.media.tumblr.com/24e83a53973e8c2823ccb95b4cd8
					7683/tumblr_o9745taQ9u1vufqdfo1_500.gif */
					$('#MainImage').attr('src', 'images/Music/luluco.gif');	
					break;
			}
	}
}
//FEATURES TO ADD
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