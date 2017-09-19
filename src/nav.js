import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
	render() {
		return(
		 <nav className="container navbar navbar-expand-lg navbar-light bg-light rounded">
	        <a className="navbar-brand" href="#">Love to Eat</a>
	        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
	          <span className="navbar-toggler-icon"></span>
	        </button>

	        <div className="collapse navbar-collapse" id="navbarsExample09">
	          <ul className="navbar-nav mr-auto">
	            <li className="nav-item active">
	              <NavLink exact to={'/'} className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
	            </li>
	            <li className="nav-item">
	              <NavLink to={'/submit'} className="nav-link" >Submit a recepie</NavLink>
	            </li>           
	          </ul>
	          
	        </div>
	      </nav>
		)
	}
}

export default Nav;