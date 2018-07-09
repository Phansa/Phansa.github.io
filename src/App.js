import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home.js';
import './core.css';
const LeagueSkins = () => (
  <div>
    <h1>
      Work in Progress
    </h1>
  </div>
)

const Photos = ({ match }) => (
  <div>
    <h1>
      Work in Progress
    </h1>
  </div>
)

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
    </div>
  </Router>
)

export default App;