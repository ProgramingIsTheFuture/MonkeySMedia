import React from "react";
import { Text, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import TopMenu from "../GeneralComponents/TopMenu";
import { Container, SearchInput, SearchMenu } from "./styles";

const Chat: React.FC = () => {
  const [value, onChangeText] = React.useState<string>("");
  return (
    <Container>
      <ScrollView>
        <View>
          <TopMenu title={"Conversas"} />
          <SearchMenu>
            <AntDesign name="search1" size={25} color="black" />
            <SearchInput
              onChangeText={(text: string) => onChangeText(text)}
              value={value}
              placeholder={"Pesquisar"}
            />
          </SearchMenu>
          <View>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Chat;
