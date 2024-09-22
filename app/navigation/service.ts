import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./authStack/types";
import { T_FORGOT_PASSWORD_ROUTE_PARAMS } from "../screens/forgotPasswordScreen/types";
import { ProfileStackParamList } from "./profileStack/types";
import { T_CHANGE_PASSWORD_SCREEN_ROUTE_PARAMS } from "../screens/changePasswordScreen/types";
import { T_LOGIN_ROUTE_PARAMS } from "../screens/loginScreen/types";
import { BottomTabsParamList } from "./bottomTabs/types";
import { HomeStackParamList } from "./homeStack/types";
import { T_NEED_HELP_SCREEN_ROUTE_PARAMS } from "../screens/needHelpScreen/types";
import { T_CREATE_FAQ_SCREEN_ROUTE_PARAMS } from "../screens/createFaqScreen/types";
import { NotificationsStackParamList } from "./notificationStack/types";
import { T_NOTIFICATION_DETAILS_SCREEN_ROUTE_PARAMS } from "../screens/notificationDetailsScreen/types";
import { FileManagerStackParamList } from "./fileManagerStack/types";
import { T_PROJECT_DETAILS_SCREEN_ROUTE_PARAMS } from "../screens/projectDetails/types";
import { ProjectsStackParamList } from "./projectsStack/types";
import { T_BENEFICIARY_SCREEN_ROUTE_PARAMS } from "../screens/addBeneficiaryScreen/types";

export const goToForgotPasswordFromLogin = (
  navigation: NativeStackNavigationProp<AuthStackParamList, "LoginScreen">,
  params?: T_FORGOT_PASSWORD_ROUTE_PARAMS
) => {
  navigation.navigate("ForgotPasswordScreen", params);
};

export const goToResetPasswordFromForgotPassword = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "ForgotPasswordScreen"
  >,
  params?: T_FORGOT_PASSWORD_ROUTE_PARAMS
) => {
  navigation.navigate("ResetPasswordScreen", params);
};

export const gotoSubMenuFromProfile = (
  navigation: NativeStackNavigationProp<ProfileStackParamList, "ProfileScreen">,
  key: `ChangePasswordScreen` | `NeedHelpScreen`,
  params?:
    | T_CHANGE_PASSWORD_SCREEN_ROUTE_PARAMS
    | T_NEED_HELP_SCREEN_ROUTE_PARAMS
) => {
  navigation.navigate(key, params);
};

export const gotoContactSupportFromNeedHelp = (
  navigation: NativeStackNavigationProp<
    ProfileStackParamList,
    "NeedHelpScreen"
  >,
  params?: T_NEED_HELP_SCREEN_ROUTE_PARAMS
) => {
  navigation.navigate("ContactSupportScreen", params);
};

export const gotoCreateFAQFromNeedHelp = (
  navigation: NativeStackNavigationProp<
    ProfileStackParamList,
    "NeedHelpScreen"
  >,
  params?: T_CREATE_FAQ_SCREEN_ROUTE_PARAMS
) => {
  navigation.navigate("CreateFaqScreen", params);
};

export const gotoLoginFromResetPassword = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    "ResetPasswordScreen"
  >,
  params?: T_LOGIN_ROUTE_PARAMS
) => {
  navigation.reset({
    index: 0,
    routes: [{ name: "LoginScreen", params }],
  });
};

export const gotoBottomTabsFromAuth = (navigation: any) => {
  navigation.reset({
    index: 0,
    routes: [{ name: "BottomTabs" }],
  });
};

export const gotoAuthFromBottomTabs = (navigation: any) => {
  navigation.reset({
    index: 0,
    routes: [{ name: "AuthStack" }],
  });
};

export const gotoNotificationsStack = (navigation: any) => {
  navigation.navigate("NotificationsStack");
};

export const gotoNotificationDetailsFromNotitications = (
  navigation: NativeStackNavigationProp<
    NotificationsStackParamList,
    "NotificationsScreen"
  >,
  params?: T_NOTIFICATION_DETAILS_SCREEN_ROUTE_PARAMS
) => {
  navigation.navigate("NotificationDetailsScreen", params);
};

export const gotoHomeStackFromProfileStack = (
  navigation: NativeStackNavigationProp<ProfileStackParamList, "ProfileScreen">,
  params?: HomeStackParamList
) => {
  navigation
    .getParent<NativeStackNavigationProp<BottomTabsParamList>>()
    .navigate("HomeStack", params);
};

export const gotoProjectDetailsFromHome = (
  navigation: NativeStackNavigationProp<HomeStackParamList, "HomeScreen">,
  params?: T_PROJECT_DETAILS_SCREEN_ROUTE_PARAMS
) => {
  navigation.navigate("ProjectDetailScreen", params);
};

export const gotoAddBeneficiariesFromProjects = (
  navigation: NativeStackNavigationProp<ProjectsStackParamList, "ProjectsScreen">,
  params?: T_BENEFICIARY_SCREEN_ROUTE_PARAMS
) => {
  navigation.navigate("AddBeneficiariyScreen", params);
};

export const gotoHomeStackFromFileManagerStack = (
  navigation: NativeStackNavigationProp<
    FileManagerStackParamList,
    "FileManagerScreen"
  >,
  params?: HomeStackParamList
) => {
  navigation
    .getParent<NativeStackNavigationProp<BottomTabsParamList>>()
    .navigate("HomeStack", params);
};
