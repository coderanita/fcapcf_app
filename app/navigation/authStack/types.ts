import { T_LOGIN_PIN_ROUTE_PARAMS } from "../../screen/loginPinScreen/type";
import { T_LOGIN_ROUTE_PARAMS } from "../../screen/loginScreen/types";

export type AuthStackParamList = {
  LoginScreen: T_LOGIN_ROUTE_PARAMS;
  LoginPinScreen: T_LOGIN_PIN_ROUTE_PARAMS;
};
