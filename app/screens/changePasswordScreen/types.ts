import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../../navigation/profileStack/types";
import * as yup from "yup";

export type T_CHANGE_PASSWORD_SCREEN = NativeStackScreenProps<
  ProfileStackParamList,
  "ChangePasswordScreen"
>;
export type T_CHANGE_PASSWORD_SCREEN_ROUTE_PARAMS = undefined;

export type T_RESET_PASSWORD_ROUTE_PARAMS = undefined;

export type T_CHANGE_PASSWORD_FORM = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const CHANGE_PASSWORD_FORM_VALIDATION = yup
  .object({
    currentPassword: yup
      .string()
      .required("Current Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must be of at least 8 characters including numbers, symbold, upper and lower case letters."
      ),
    newPassword: yup
      .string()
      .required("New Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must be of atleast 8 characters including numbers and symbols"
      ),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf(
        [yup.ref("newPassword")],
        "Confirm password must match with new password"
      ),
  })
  .required();
