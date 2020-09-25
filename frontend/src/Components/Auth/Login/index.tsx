import React, { useState } from "react";
import api from "../../../services";
import { useHistory, Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

// import { Container } from './styles';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setUsernameStore = useStoreActions((action: any) => action.User.setUsername);
  const history = useHistory();

  const changeUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const setTokenToLocalStorega = (token: string | null) => {
    localStorage.setItem("auth", JSON.stringify({ login: true, token: token }));
    history.push("/");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api
      .post("auth/", { username: username, password: password })
      .then((resp) => {
        setTokenToLocalStorega(resp.data.token);
        setUsernameStore({ username: username });
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
      You dont have one?
      <Link to={"/register/"}> Register</Link>
    </div>
  );
};

export default Login;
