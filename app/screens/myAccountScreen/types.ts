import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../../navigation/profileStack/types";
import * as yup from "yup";

export type T_MY_ACCOUNT_SCREEN = NativeStackScreenProps<
  ProfileStackParamList,
  "MyAccountScreen"
>;
export type T_MY_ACCOUNT_SCREEN_ROUTE_PARAMS = undefined;

export type T_MY_ACCOUNT_FORM = {
  fullName: string;
  email: string;
};

export const MY_ACCOUNT_FORM_VALIDATION = yup
  .object({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email("Email is invalid").required("Email is required"),
  })
  .required();
