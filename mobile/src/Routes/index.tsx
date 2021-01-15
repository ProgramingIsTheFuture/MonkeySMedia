import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello</Text>
    </View>
  );
}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Users-List" component={Home} />
        <Screen name="Search" component={Home} />
        <Screen name="Profile" component={Home} />
      </Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

export default Routes;
