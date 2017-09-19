import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import Submit from './Submit';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Nav from './nav';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();


ReactDOM.render(
 <Router>
    <div> 
    	<Nav />
  	  <Route exact path="/" component={App}/>       
      <Route exact path="/" component={Home}/>
      <Route path="/submit" component={Submit} history={history}/>      
    </div>
  </Router>



	, document.getElementById('root'));
registerServiceWorker();
