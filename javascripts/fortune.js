function fortune()
{
	image = document.getElementById('Fortune');
	//http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	var randomnumber = Math.floor(Math.random() * (8 - 0 + 1));
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
	image.src = sources[randomnumber];
	/* Scrolls to bottom of page so that images of different dimension will not cause
	issues */
	//alert("Hi");
	//end_view = document.getElementById('End');
	//end_view.scrollIntoView();
	//window.scrollBy(0, 1000);
}
