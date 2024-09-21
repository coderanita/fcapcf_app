import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./authStack/types";
import { T_FORGOT_PASSWORD_ROUTE_PARAMS } from "../screens/forgotPasswordScreen/types";
import { T_LOGIN_ROUTE_PARAMS } from "../screens/loginScreen/types";
import { T_HOME_ROUTE_PARAMS } from "../screens/homeScreen/type";

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

export const goToLoginFromResetPassword = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "ResetPasswordScreen"
  >,
  params?: T_LOGIN_ROUTE_PARAMS
) => {
  navigation.navigate("LoginScreen", params);
};

export const gotoDrawerStackFromAuth = (
  navigation: any,
  params?: T_HOME_ROUTE_PARAMS
) => {
  navigation.reset({
    index: 0,
    routes: [{ name: "HomeStack", params }],
  });
};
