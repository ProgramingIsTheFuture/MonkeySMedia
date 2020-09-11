import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Components/Auth/Login";
import App from "../App";

// const PrivateRoute: React.SFC<RouteProps | null> = ({
//   component: Component,
//   ...rest
// }: {
//   component: React.ComponentType<RouteProps>;
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
//       )
//     }
//   />
// );

const Routers: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={App} />
        {/* <PrivateRoute path="/" component={App} /> */}
      </Switch>
    </Router>
  );
};

export default Routers;
