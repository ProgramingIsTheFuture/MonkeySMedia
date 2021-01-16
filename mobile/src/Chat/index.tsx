import React from "react";
import { Text, View, ScrollView } from "react-native";

import TopMenu from "../GeneralComponents/TopMenu";
import { Container, SearchInput } from "./styles";

const Chat: React.FC = () => {
  const [value, onChangeText] = React.useState<string>("");
  return (
    <Container>
      <ScrollView>
        <View>
          <TopMenu title={"Conversas"} />
          <View>
            <SearchInput
              onChangeText={(text: string) => onChangeText(text)}
              value={value}
              placeholder={"Pesquisar"}
            />
          </View>
          <View>
            <Text>Chat Page</Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Chat;
