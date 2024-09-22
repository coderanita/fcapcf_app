import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/authStack/types";
import * as yup from "yup";

export type T_RESET_PASSWORD_SCREEN = NativeStackScreenProps<
  AuthStackParamList,
  "ResetPasswordScreen"
>;

export type T_RESET_PASSWORD_ROUTE_PARAMS = undefined;

export type T_RESET_PASSWORD_FORM = {
  newPassword: string;
  confirmPassword: string;
};

export const RESET_PASSWORD_FORM_VALIDATION = yup
  .object({
    newPassword: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must be of atleast 8 characters including numbers and symbols"
      ),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf(
        [yup.ref("newPassword")],
        "Confirm password must match with password"
      ),
  })
  .required();
