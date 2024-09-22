import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../../navigation/profileStack/types";
import * as yup from "yup";
import { T_DROPDOWN_ITEM } from "../../components/appDropdown/types";

export type T_CONTACT_SUPPORT_SCREEN = NativeStackScreenProps<
  ProfileStackParamList,
  "ContactSupportScreen"
>;
export type T_CONTACT_SUPPORT_SCREEN_ROUTE_PARAMS = undefined;

export type T_CONTACT_SUPPORT_FORM = {
  issuesDropdown: string;
  toDropdown: string;
  message: string;
};

export const CONTACT_SUPPORT_FORM_VALIDATION = yup.object().shape({
  issuesDropdown: yup.string().required("Please select a valid option."),
  toDropdown: yup.string().required("Please select a valid option."),
  message: yup
    .string()
    .required("Message is required")
    .min(8, "Message should contain at least 8 characters."),
});
