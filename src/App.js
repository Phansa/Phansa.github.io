import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Components/Home.js';
import LeagueSkins from './Components/LeagueSkins.js';
import Photos from './Components/Photos.js';
import Achievements from './Components/Achievements.js';

const NavBar = () =>
(
  <nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
    </div>
    <div id="navbar" className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/leagueSkins">League Skins</Link></li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
      </ul>
    </div>
  </div>
</nav>
)

const App = () => (
  <Router>
    <div>
      <NavBar />
  
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/leagueSkins" component={LeagueSkins}/>
      <Route path="/photos" component={Photos}/>
      <Route path="/achievements" component={Achievements}/>
    </div>
  </Router>
)

export default App;