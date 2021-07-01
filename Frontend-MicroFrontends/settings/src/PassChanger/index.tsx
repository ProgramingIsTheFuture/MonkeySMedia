import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const PassChanger = () => {
  const [errors, setErrors] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [lpass, setLPass] = useState<string>("");
  const [npass, setNPass] = useState<string>("");
  const [nrpass, setNRPass] = useState<string>("");

  useEffect(() => {
    System.import("@monkeysmedia/util-module")
      .then((util) => util.apiGet("api/users/get-user/"))
      .then((r) => setUser(r.data.username));
  }, []);

  const handleSub = (e) => {
    e.preventDefault();
    if (npass.length >= 1 && nrpass.length >= 1 && lpass.length >= 1) {
      if (npass === nrpass) {
        System.import("@monkeysmedia/util-module")
          .then((util) =>
            util.apiPost("api/users/login/", {
              username: user,
              password: lpass,
            })
          )
          .then((r) => {
            if (r.status === 200) {
              System.import("@monkeysmedia/util-module")
                .then((util) =>
                  util.apiPost("api/users/change-password/", {
                    password: npass,
                  })
                )
                .then((r) => {
                  r.status === 200 ? setErrors("Alterada com sucesso") : null;
                  setLPass("");
                  setNPass("");
                  setNRPass("");
                });
            }
          })
          .catch(() => {
            setErrors("Credencial errada!");
          });
      } else {
        setErrors("Passwords não coincidem!");
      }
    } else {
      setErrors("Campos estão vazios!");
    }
  };

  return (
    <Container>
      {errors.length >= 1 ? errors : null}
      <form onSubmit={handleSub}>
        <div>
          <label htmlFor={"lpass"}>Password atual</label>
          <input
            type={"password"}
            name={"lpass"}
            placeholder={"Password atual"}
            onChange={(e) => setLPass(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor={"npass"}>Nova password</label>
          <input
            type={"password"}
            name={"npass"}
            placeholder={"Nova password"}
            onChange={(e) => setNPass(e.target.value)}
          />

          <label htmlFor={"nrpass"}>Confirma a nova password</label>
          <input
            type={"password"}
            name={"nrpass"}
            placeholder={"Nova password"}
            onChange={(e) => setNRPass(e.target.value)}
          />
        </div>
        <button>Alterar</button>
      </form>
    </Container>
  );
};

export default PassChanger;
