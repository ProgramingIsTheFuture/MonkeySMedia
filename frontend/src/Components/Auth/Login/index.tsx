import React, { useState } from "react";
import api from "../../../services";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

import { Container } from "./styles";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setUsernameStore = useStoreActions(
    (action: any) => action.User.setUsername
  );

  const changeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const setTokenToLocalStorega = (token: string | null) => {
    localStorage.setItem("auth", JSON.stringify({ login: true, token: token }));
    window.location.href = "/";
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api
      .post("api/users/login/", { username: username, password: password })
      .then()
      .catch();

    api
      .post("auth/", { username: username, password: password })
      .then((resp) => {
        setTokenToLocalStorega(resp.data.token);
        setUsernameStore({ username: username });
      })
      .catch();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor={"username"}>Username</label>
          <input
            type={"text"}
            value={username}
            name={"username"}
            onChange={changeUsername}
          />
        </div>
        <div>
          <label htmlFor={"password"}>Password</label>
          <input
            type={"password"}
            value={password}
            name={"password"}
            onChange={changePassword}
          />
        </div>
        <div>
          <input type={"submit"} value={"LogIn"} />
        </div>
        You dont have one?
        <Link to={"/register/"}> Register</Link>
      </form>
    </Container>
  );
};

export default Login;
