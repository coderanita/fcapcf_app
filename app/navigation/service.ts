import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./authStack/types";
import { T_LOGIN_PIN_ROUTE_PARAMS } from "../screen/loginPinScreen/type";
import { T_FORGOT_PASSWORD_ROUTE_PARAMS } from "../screen/forgotPasswordScreen/type";

export const goToLoginPinScreenFromLoginScreen = (
  navigation: NativeStackNavigationProp<AuthStackParamList, "LoginScreen">,
  params?: T_LOGIN_PIN_ROUTE_PARAMS
) => {
  navigation.navigate("LoginPinScreen", params);
};

export const goToForgotPasswordScreenFromLoginPinScreen = (
  navigation: NativeStackNavigationProp<AuthStackParamList, "LoginPinScreen">,
  params?: T_FORGOT_PASSWORD_ROUTE_PARAMS
) => {
  navigation.navigate("ForgotPasswordScreen", params);
};

export const goToResetPasswordScreenFromForgotPasswordScreen = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "ForgotPasswordScreen"
  >,
  params?: T_FORGOT_PASSWORD_ROUTE_PARAMS
) => {
  navigation.navigate("ResetPasswordScreen", params);
};
