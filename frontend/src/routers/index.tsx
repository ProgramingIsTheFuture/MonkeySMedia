import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  RouteProps,
} from "react-router-dom";
import Login from "../Components/Auth/Login";
import App from "../Components/Feed";
import { ReactComponent } from "*.svg";

const isAuth = () => {
  const auth: any = localStorage.getItem("auth");
  if (JSON.parse(auth).login) return true;
  return false;
};

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuth() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/" component={App} /> */}
        <PrivateRoute exact path="/" component={App} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  );
};

export default Routers;
