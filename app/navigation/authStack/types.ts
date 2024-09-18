import { T_FORGOT_PASSWORD_ROUTE_PARAMS } from "../../screens/forgotPasswordScreen/types";
import { T_LOGIN_PIN_ROUTE_PARAMS } from "../../screens/loginPinScreen/type";
import { T_LOGIN_ROUTE_PARAMS } from "../../screens/loginScreen/types";
import { T_RESET_PASSWORD_ROUTE_PARAMS } from "../../screens/resetPasswordScreen/types";

export type AuthStackParamList = {
  LoginScreen: T_LOGIN_ROUTE_PARAMS;
  LoginPinScreen: T_LOGIN_PIN_ROUTE_PARAMS;
  ForgotPasswordScreen: T_FORGOT_PASSWORD_ROUTE_PARAMS;
  ResetPasswordScreen: T_RESET_PASSWORD_ROUTE_PARAMS;
};
