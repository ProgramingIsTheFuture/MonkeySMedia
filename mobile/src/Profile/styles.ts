import styled from "styled-components/native";
import Constants from "expo-constants";
import { GlobalColors } from "../Global";

export const Container = styled.SafeAreaView`
  background-color: ${GlobalColors.primary};
  margin-top: ${Constants.statusBarHeight};

  height: 100%;
`;
