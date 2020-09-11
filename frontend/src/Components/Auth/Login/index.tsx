import React, { useState, useEffect } from "react";
import api from "../../../services";

// import { Container } from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    api
      .post("auth/", { username: username, password: password })
      .then((resp) => {
        if (resp.data.token) {
          localStorage.setItem(
            "auth",
            JSON.stringify({ login: true, token: resp.data.token })
          );
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={username}
          name={"username"}
          onChange={changeUsername}
        />
        <input
          type={"password"}
          value={password}
          name={"password"}
          onChange={changePassword}
        />
        <input type={"submit"} value={"LogIn"} />
      </form>
    </div>
  );
};

export default Login;
