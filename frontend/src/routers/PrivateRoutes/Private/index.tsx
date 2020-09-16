import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const isAuth = () => {
	const auth: any = localStorage.getItem('auth');
	try {
		if (JSON.parse(auth).login) return true;
	} catch {}
	return false;
};

export const PrivateRoute = ({component, ...rest}: any) => {
	const routeComponent = (props: any) =>
		isAuth() ? (
			React.createElement(component, props)
		) : (
			<Redirect to={{pathname: '/login'}} />
		);
	return <Route {...rest} render={routeComponent} />;
};
