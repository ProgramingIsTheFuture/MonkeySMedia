import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import Chat from "../Chat";
import Profile from "../Profile";
import { GlobalColors } from "../Global";

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 70,
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
        }}
      >
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
            title: "Conversas",
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
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

export default Routes;
