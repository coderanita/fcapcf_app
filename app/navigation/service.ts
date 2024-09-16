import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./authStack/types";
import { T_LOGIN_PIN_ROUTE_PARAMS } from "../screen/loginPinScreen/type";

export const goToLoginPinScreenFromLoginScreen = (
  navigation: NativeStackNavigationProp<AuthStackParamList, "LoginScreen">,
  params?: T_LOGIN_PIN_ROUTE_PARAMS
) => {
  navigation.navigate("LoginPinScreen", params);
};
