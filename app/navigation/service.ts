import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./authStack/types";
import { T_LOGIN_PIN_ROUTE_PARAMS } from "../screens/loginPinScreen/type";
import { T_FORGOT_PASSWORD_ROUTE_PARAMS } from "../screens/forgotPasswordScreen/types";

export const goToForgotPasswordFromLogin = (
  navigation: NativeStackNavigationProp<AuthStackParamList, "LoginScreen">,
  params?: T_FORGOT_PASSWORD_ROUTE_PARAMS
) => {
  navigation.navigate("ForgotPasswordScreen", params);
};

export const goToResetPasswordFromForgotPassword = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "ForgotPasswordScreen"
  >,
  params?: T_FORGOT_PASSWORD_ROUTE_PARAMS
) => {
  navigation.navigate("ResetPasswordScreen", params);
};
