import React from "react";

import Feed from "./Feed";
import { Container } from "./styles";

const App = (props) => {
  return (
    <Container>
      <Feed usernameProfile={props.username ? props.username : null} />
    </Container>
  );
};

export default App;
