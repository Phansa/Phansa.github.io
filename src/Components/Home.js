import React, { Component } from 'react';

class Home extends Component{
    render () 
    {
        return(
        <section>
            <h1>
                About Me.
            </h1>
            <div id="SelfImage">
                <img src="./images/Photos/SelfPortrait.jpg" alt="Me" />
            </div>  
            <p>
                My name is Adeet Phanse and I am currently a Software Engineer at 
                Capital One. I have a degree in Computer Science
                from Rensselaer Polytechnic Institute and am interested in 
                web/full stack development. On this website you can find some of my 
                hobbies/interests as well as projects I have worked on.
                <br /> 
                Feel free to add me on LinkedIn 
                <a href="https://www.linkedin.com/in/adeet-phanse-4a07b1100">
                <img src="./images/Photos/linkedin_image.png" width ="40" height="40" border="0" /> 
                </a> 
            </p>
            <h1>
                Hobbies/Interests
            </h1>
            <p> 
                I sell various Magic the Gathering / Yu-Gi-Oh cards that I have 
                collected over the years on these following sites, Tcgplayer.com and eBay.com. 
            </p>
            <p> Here are links to my stores!
                <br />
                Ebay - 
                <a href="http://www.ebay.com/sch/eletrix214/m.html?_nkw=&_armrs=1&_ipg=&_from=">
                <img src="./images/Photos/ebay_image.png" width="646" height="220" border="0" />
                </a>
                <br />
                Tcgplayer - 
                <a href="http://shop.tcgplayer.com/all/product/show?sellerfilter=ff9a806a
                &newSearch=false&Language=English&lu=true">
                <img src="./images/Photos/tcgplayer.png" border="0" />
                </a>
            </p>
            <br />
            <p> Check out my Github!
                <a href="https://github.com/Phansa"> 
                <img src="https://image.flaticon.com/icons/svg/25/25231.svg" 
                height="150" width="100"border ="0" /> 
                </a>
            </p>
            <h1>
                Computer Science Projects
            </h1>
            <p>
                I have created a database application in Visual Basic to keep track of 
                membership information for India Foundation of Metropolitan Princeton. 
                More details about both of those projects can be found <a href="projects.html">
                here </a>.
            </p>
            <p>
                I have worked on another open source Pokemon game simulator, 
                <a href="https://github.com/FullScreenShenanigans/FullScreenPokemon"> 
                FullScreen Pokemon </a> which is a TypeScript implementation of the original Pokemon 
                games with an emphasis on extensibility  and modularity. I worked on various parts of 
                the game engine, fixed some bugs and even animated some moves! It is a very cool and 
                ambitious project and I would encourage you to check it out or even contribute to it!
            </p>
            <p>
                I am always working on various websites and hosting them on github, here a few of 
                my most recent ones.
                <br />
                <a href="https://phansa.github.io/Snake/"> Snake </a> - a simple javascript "snake" like game.
                <br />
                <a href="https://phansa.github.io/NostalgiaMTG-Angular/"> Nostalgia MTG </a> - 
                a Magic the Gathering 
                pack opening simulator.
                <br />
                <a href="https://phansa.github.io/ReactLearning/"> Mining Simulator </a> - 
                a cookie clicker - esque mining game.
                <br />
                <a href="https://phansa.github.io/OldSchoolRunescapeClueGenerator/"> Clue Generator </a> -
                a clue scroll reward generator based on the game Old School Runescape.
            </p>
            <h1> 
                Thanks for visiting my website and have a great day!
            </h1>
        </section>
        )
    }
}

export default Home;