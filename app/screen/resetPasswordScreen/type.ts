import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/authStack/types";
import * as yup from "yup";

export type T_RESET_PASSWORD_SCREEN = NativeStackScreenProps<
  AuthStackParamList,
  "ResetPasswordScreen"
>;

export type T_RESET_PASSWORD_ROUTE_PARAMS = undefined;
export type T_RESET_PASSWORD_FORM = {
  email: string;
};

export const RESET_PASSWORD_FORM_VALIDATION = yup
  .object({
    email: yup.string().email("Email is invalid").required("Email is required"),
  })
  .required();
