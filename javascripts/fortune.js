function fortune()
{
	image = document.getElementById('Fortune');
	//http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	//Everytime you add a new image, increase by 1!
	var randomnumber = Math.floor(Math.random() * (12 - 0 + 1));
	var sources = [];
	sources.push("http://imgs.xkcd.com/comics/1_to_10.png");
	sources.push("https://xlinux.nist.gov/dads/Images/xkcd%200287%20np_complete.png");
	sources.push("http://imgs.xkcd.com/comics/the_general_problem.png");
	sources.push("http://imgs.xkcd.com/comics/flow_charts.png");
	sources.push("http://imgs.xkcd.com/comics/travelling_salesman_problem.png");
	sources.push("http://imgs.xkcd.com/comics/documents.png");
	sources.push("http://imgs.xkcd.com/comics/a_new_captcha_approach.png");
	sources.push("http://imgs.xkcd.com/comics/trolley_problem.png");
	sources.push("http://imgs.xkcd.com/comics/file_extensions.png");
	sources.push("http://imgs.xkcd.com/comics/tasks.png");
	sources.push("http://imgs.xkcd.com/comics/ios_keyboard.png");
	sources.push("http://imgs.xkcd.com/comics/cloud.png");
	sources.push("http://imgs.xkcd.com/comics/efficiency.png");
	image.src = sources[randomnumber];
}
