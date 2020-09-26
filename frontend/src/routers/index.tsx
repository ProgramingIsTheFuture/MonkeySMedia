import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Feed from './Pages/FeedPage';
import GlobalStyles from '../Global/GlobalStyles';
import {PrivateRoute} from './PrivateRoutes/Private';
import {LoggedIn} from './PrivateRoutes/LoggedIn';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import NotFoundPage from './Pages/NotFoundPage';
import ProfilePage from './Pages/ProfilePage';

const Routers: React.FC = () => {
	return (
		<Router>
			<Switch>
				<LoggedIn exact path="/login/" component={LoginPage} />
				<LoggedIn exact path="/register/" component={RegisterPage} />
				<PrivateRoute exact path="/" component={Feed} />
				<PrivateRoute exact path="/Profile/:username" component={ProfilePage} />
				<Route path="*" component={NotFoundPage} />
			</Switch>
			<GlobalStyles />
		</Router>
	);
};

export default Routers;
