import React, { useState } from "react";

import { Container } from "./styles";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

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
      .catch((r) => {
        if (r.response.status === 400) {
          setErrors("Credenciais invalidas!");
        } else {
          setErrors("Ocorreu algum problema no servidor, tente mais tarde");
        }
      });

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
        {errors.length >= 1 ? <h4>{errors}</h4> : null}
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
        <div
          onClick={() =>
            System.import("@monkeysmedia/util-module").then((util) =>
              util.RedirectTo("/register/")
            )
          }
          style={{ cursor: "pointer", color: "#0095f6" }}
        >
          Register
        </div>
      </form>
    </Container>
  );
};

export default Login;
