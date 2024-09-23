import { T_CHANGE_PASSWORD_SCREEN_ROUTE_PARAMS } from "../../screens/changePasswordScreen/types";
import { T_CONTACT_SUPPORT_SCREEN_ROUTE_PARAMS } from "../../screens/contactSupportScreen/types";
import { T_CREATE_FAQ_SCREEN_ROUTE_PARAMS } from "../../screens/createFaqScreen/types";
import { T_MY_ACCOUNT_SCREEN_ROUTE_PARAMS } from "../../screens/myAccountScreen/types";
import { T_NEED_HELP_SCREEN_ROUTE_PARAMS } from "../../screens/needHelpScreen/types";
import { T_PROFILE_SCREEN_ROUTE_PARAMS } from "../../screens/profileScreen/types";

export type ProfileStackParamList = {
  ProfileScreen: T_PROFILE_SCREEN_ROUTE_PARAMS;
  ChangePasswordScreen: T_CHANGE_PASSWORD_SCREEN_ROUTE_PARAMS;
  NeedHelpScreen: T_NEED_HELP_SCREEN_ROUTE_PARAMS;
  ContactSupportScreen: T_CONTACT_SUPPORT_SCREEN_ROUTE_PARAMS;
  CreateFaqScreen: T_CREATE_FAQ_SCREEN_ROUTE_PARAMS;
  MyAccountScreen: T_MY_ACCOUNT_SCREEN_ROUTE_PARAMS;
};
