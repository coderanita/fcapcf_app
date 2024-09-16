import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/authStack/types";
import * as yup from "yup";

export type T_LOGIN_SCREEN = NativeStackScreenProps<
  AuthStackParamList,
  "LoginScreen"
>;

export type T_LOGIN_ROUTE_PARAMS = undefined;
export type T_LOGIN_FORM = {
  email: string;
  password: string;
};

export const LOGIN_FORM_VALIDATION = yup
  .object({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must contain 8 characters having at least one uppercase, one lowercase, one number, and one special character."
      ),
  })
  .required();
