import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../../navigation/profileStack/types";
import * as yup from "yup";

export type T_CREATE_FAQ_SCREEN = NativeStackScreenProps<
  ProfileStackParamList,
  "CreateFaqScreen"
>;
export type T_CREATE_FAQ_SCREEN_ROUTE_PARAMS = undefined;

export type T_CREATE_FAQ_FORM = {
  title: string;
  response: string;
};

export const CREATE_FAQ_FORM_VALIDATION = yup
  .object({
    title: yup
      .string()
      .required("FAQ Title is required")
      .min(8, "FAQ title should contain at least 8 characters."),
    response: yup
      .string()
      .required("FAQ response is required")
      .min(8, "FAQ response should contain at least 8 characters."),
  })
  .required();
