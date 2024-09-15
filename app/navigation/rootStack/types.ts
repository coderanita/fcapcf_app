import { AuthStackParamList } from "../authStack/types";
import { HomeStackParamList } from "../homeStack/types";

export type RootStackParamList = {
  AuthStack: AuthStackParamList;
  HomeStack: HomeStackParamList;
};
