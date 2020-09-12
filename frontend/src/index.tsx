import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routers";
import { StoreProvider } from "easy-peasy";
import store from "./Store";

ReactDOM.render(<StoreProvider store={store}><Routers /></StoreProvider>, document.getElementById("root"));

