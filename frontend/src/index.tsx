import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routers";
import { StoreProvider } from "easy-peasy";
import store from "./Store";
import dotenv from "dotenv";

dotenv.config();

ReactDOM.render(
  <StoreProvider store={store}>
    <Routers />
  </StoreProvider>,
  document.getElementById("root")
);
