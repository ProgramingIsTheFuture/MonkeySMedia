import React from "react";

import { Container } from "./styles";

const NotFound: React.FC = (props) => {
  return (
    <Container>
      <div>404</div>
      <div>This Page Does Not Exist</div>
      <div>
        Try <a href="/login/">loggin in</a> or{" "}
        <a href="/register/">register your account</a>
      </div>
    </Container>
  );
};

export default NotFound;
