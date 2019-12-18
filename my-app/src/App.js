import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LogIn from './components/LogIn';
import Error from './components/Error';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';

const App = () => {
	return (
		<div className="App">
			<Route exact path='/' component={LogIn}/>
			<Route path='/error' component={Error}/>
			<PrivateRoute exact path='/friends' component={FriendsList}/>
			<PrivateRoute path='/friends/:id' component={Friend}/>
		</div>
	);
};

export default App;
