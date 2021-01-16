import styled from "styled-components/native";
import Constants from "expo-constants";
import { GlobalColors } from "../Global";

export const Container = styled.SafeAreaView`
  background-color: ${GlobalColors.primary};
  margin-top: ${Constants.statusBarHeight};

  height: 100%;
`;

export const SearchInput = styled.TextInput`
  height: 30px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 15px;
  text-align: center;
`;
