import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import store from './app/store';
import { Provider } from 'react-redux';
import {Route,BrowserRouter as Router,Switch,Redirect,Link} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
		<Router>
				  <header style={{textAlign:'center',borderBottom:'2px solid blue',paddingBottom:5}}>
						<Link style={{textDecoration:'none',marginRight:'10px'}} to='/A'>Component A</Link>
						<Link style={{textDecoration:'none',marginRight:'10px'}} to='/B'>Component B</Link>
						<Link style={{textDecoration:'none',marginRight:'10px'}} to='/C'>Component C</Link>
						<Link style={{textDecoration:'none',marginRight:'10px'}}  to='/timer'>Component Timer</Link>
				  </header>
				  
				  <Redirect from='/' to='/timer' />
				<Switch>
					<Route exact path='/A' component={A} />
					<Route exact path='/B' component={B} />
					<Route exact path='/C' component={C} />
					<Route exact path='/timer' component={Timer} />
					<Route  path='*' component={NotFound} />
				</Switch>
		</Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


function NotFound(){
	return(
		<p>Wrong Way !!</p>
	)
}