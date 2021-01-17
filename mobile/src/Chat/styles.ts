import styled from "styled-components/native";
import Constants from "expo-constants";
import { GlobalColors } from "../Global";

export const Container = styled.SafeAreaView`
  background-color: ${GlobalColors.primary};
  margin-top: ${Constants.statusBarHeight};

  height: 100%;
`;

export const SearchMenu = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  height: 35px;
  margin: 5px;

  border: 1px solid black;
  border-radius: 15px;

  padding-left: 10px;
  flex: 1;
`;
