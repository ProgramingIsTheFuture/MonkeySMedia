import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuth} from '../Private';

export const LoggedIn = ({component, ...rest}: any) => {
	const routeComponent = (props: any) =>
		isAuth() ? (
			<Redirect to={{pathname: '/'}} />
		) : (
			React.createElement(component, props)
		);
	return <Route {...rest} render={routeComponent} />;
};
