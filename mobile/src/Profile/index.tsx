import React from "react";
import { Text, View } from "react-native";

import TopMenu from "../GeneralComponents/TopMenu";
import { Container } from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <View>
        <TopMenu title={"Perfil"} />
        <Text>Hello Profile</Text>
      </View>
    </Container>
  );
};

export default Profile;
