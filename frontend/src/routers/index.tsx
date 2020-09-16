import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../Components/Auth/Login';
import App from '../Components/Feed';
import GlobalStyles from '../Global/GlobalStyles';
import Register from '../Components/Auth/Register';
import {PrivateRoute} from './PrivateRoutes/Private';
import {LoggedIn} from './PrivateRoutes/LoggedIn';

const Routers: React.FC = () => {
	return (
		<Router>
			<Switch>
				<LoggedIn exact path="/login/" component={Login} />
				<LoggedIn exact path="/register/" component={Register} />
				<PrivateRoute exact path="/" component={App} />
				<Route path="*" component={() => <h1>Page not found</h1>} />
			</Switch>
			<GlobalStyles />
		</Router>
	);
};

export default Routers;
