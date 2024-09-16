import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/authStack/types";
import * as yup from "yup";

export type T_LOGIN_PIN_SCREEN = NativeStackScreenProps<
  AuthStackParamList,
  "LoginPinScreen"
>;

export type T_LOGIN_PIN_ROUTE_PARAMS = undefined;
export type T_LOGIN_PIN_FORM = {
  email: string;
  pin: number;
};

export const LOGIN_FORM_VALIDATION = yup
  .object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    pin: yup
      .number()
      .required("Pin is required")
      .min(4, "Pin must be 4 digits")
      .max(6, "Pin must be 6 digits"),
  })
  .required();
