import React, { useState } from "react";

import { Container } from "./styles";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const setTokenToLocalStorega = (token: string | null) => {
    localStorage.setItem("auth", JSON.stringify({ token: token }));
    window.location.href = "/";
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    System.import("@monkeysmedia/util-module")
      .then((util: any) =>
        util.apiPost(
          "api/users/login/",
          {
            username: username,
            password: password,
          },
          true
        )
      )
      .then()
      .catch();

    System.import("@monkeysmedia/util-module")
      .then((util) =>
        util.apiPost("auth/", { username: username, password: password }, true)
      )
      .then((resp) => {
        setTokenToLocalStorega(resp.data.token);
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
        <a href={"/register/"}> Register</a>
      </form>
    </Container>
  );
};

export default Login;
