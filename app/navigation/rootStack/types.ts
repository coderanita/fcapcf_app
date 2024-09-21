import { AuthStackParamList } from "../authStack/types";
import { HomeStackParamList } from "../homeStack/type";

export type RootStackParamList = {
  AuthStack: AuthStackParamList;
  HomeStack: HomeStackParamList;
};
