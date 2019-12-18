import React from 'react';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LogIn from './components/LogIn';
import Error from './components/Error';
import FriendsList from './components/FriendsList';

const App = () => {
	return (
		<div className="App">
			<Route exact path='/' component={LogIn}/>
			<Route path='/error' component={Error}/>
			<PrivateRoute path='/friends' component={FriendsList}/>
		</div>
	);
};

export default App;
