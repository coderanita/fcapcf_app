import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../navigation/homeStack/types";

export type T_HOME_SCREEN = NativeStackScreenProps<
  HomeStackParamList,
  "HomeScreen"
>;
export type T_HOME_SCREEN_ROUTE_PARAMS = undefined;

export type T_PROJECT_ITEM = {
  key: string;
  title: string;
  info: string;
  date: string;
  location: string;
};
