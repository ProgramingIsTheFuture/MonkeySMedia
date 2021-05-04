import React, { useState } from "react";

import { Container, Message } from "./styles";

const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[/]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
};

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

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
    let csrftoken: string;
    System.import("@monkeysmedia/util-module").then((util) => {
      csrftoken = util.getCookie("csrftoken");
    });
    if (
      username &&
      first_name &&
      last_name &&
      validateEmail(email) &&
      password
    ) {
      System.import("@monkeysmedia/util-module")
        .then((util) =>
          util.apiPostRegister(
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
        )
        .then(() => {
          window.location.href = "/login/";
        })
        .catch();
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      {/*<img src={register_monkey} alt={"Register Monkey"} height={"80%"} /> */}
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <Message error={error}>Some field is missing!</Message>
        <div>
          <label htmlFor={"username"}>Username</label>
          <input
            type={"text"}
            name={"username"}
            value={username}
            onChange={handleUsername}
            placeholder={"Username"}
          />
        </div>
        <div>
          <label htmlFor={"first_name"}>First Name</label>
          <input
            type={"text"}
            name={"first_name"}
            value={first_name}
            onChange={handleFirstName}
            placeholder={"First Name"}
          />
        </div>
        <div>
          <label htmlFor={"last_name"}>Last Name</label>
          <input
            type={"text"}
            name={"last_name"}
            value={last_name}
            onChange={handleLastName}
            placeholder={"Last Name"}
          />
        </div>
        <div>
          <label htmlFor={"email"}>email</label>
          <input
            type={"email"}
            name={"email"}
            value={email}
            onChange={handleEmail}
            placeholder={"Email"}
          />
        </div>
        <div>
          <label htmlFor={"password"}>Password</label>
          <input
            type={"password"}
            name={"password"}
            value={password}
            onChange={handlePassword}
            placeholder={"Password"}
          />
        </div>
        <div>
          <input type={"submit"} value={"Create"} />
        </div>
        Do you have one?
        <a href={"/login/"}>Login</a>
      </form>
    </Container>
  );
};

export default Register;
