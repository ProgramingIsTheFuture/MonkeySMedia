import React, { useState } from "react";

import { Container } from "./styles";
import api from "../../../services";
import getCookie from "../../../services/csrfToken";
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const history = useHistory();
  
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleFirstName = (e: any) => {
    setFirst_name(e.target.value);
  };

  const handleLastName = (e: any) => {
    setLast_name(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const csrftoken = getCookie("csrftoken");

    api
      .post(
        "api/users/create/",
        {
          username: username,
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
        },
        { headers: { "X-CSRFToken": csrftoken }, withCredentials: true }
      )
      .then((resp) => history.push("/login/"))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={username}
          onChange={handleUsername}
          placeholder={"Username"}
        />
        <input
          type={"text"}
          value={first_name}
          onChange={handleFirstName}
          placeholder={"first_name"}
        />
        <input
          type={"text"}
          value={last_name}
          onChange={handleLastName}
          placeholder={"last_name"}
        />
        <input
          type={"text"}
          value={email}
          onChange={handleEmail}
          placeholder={"email"}
        />
        <input
          type={"password"}
          value={password}
          onChange={handlePassword}
          placeholder={"Password"}
        />
        <input type={"submit"} value={"Create"} />
      </form>
    </Container>
  );
};

export default Register;
