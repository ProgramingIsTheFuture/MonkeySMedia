import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Chat from "../Chat";
import { GlobalColors } from "../Global";

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
      <Navigator tabBarOptions={TabBarOption}>
        <Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="chatbubble-ellipses-sharp"
                  size={size}
                  color={focused ? "#000" : "#ccc"}
                />
              );
            },
            title: "Conversa",
          }}
        />
        <Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="person-circle-outline"
                  size={size}
                  color={focused ? "#000" : "#ccc"}
                />
              );
            },
            title: "Perfil",
          }}
        />
      </Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

const TabBarOption = {
  style: {
    height: 60,
    backgroundColor: GlobalColors.secundary,
    borderTopWidth: 0,
  },
  tabStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    flex: 0,
    width: 20,
    height: 20,
  },
  labelStyle: {
    fontSize: 11,
    marginTop: 5,
  },
  inactiveTintColor: GlobalColors.shadow,
  activeTintColor: GlobalColors.shadow,
};

export default Routes;
