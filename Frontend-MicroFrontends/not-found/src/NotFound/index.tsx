import React from "react";

import { Container } from "./styles";

const NotFound: React.FC = (props) => {
  return (
    <Container>
      <div>404</div>
      <div>This Page Does Not Exist</div>
      <div>
        Try
        <div
          onClick={() =>
            System.import("@monkeysmedia/util-module").then((util) =>
              util.RedirectTo("/register/")
            )
          }
        >
          loggin in
        </div>
        or
        <div
          onClick={() =>
            System.import("@monkeysmedia/util-module").then((util) =>
              util.RedirectTo("/register/")
            )
          }
        >
          register your account
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
