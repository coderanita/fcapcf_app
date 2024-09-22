import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NotificationsStackParamList } from "../../navigation/notificationStack/types";

export type T_NOTIFICATIONS_SCREEN = NativeStackScreenProps<
  NotificationsStackParamList,
  "NotificationsScreen"
>;
export type T_NOTIFICATIONS_SCREEN_ROUTE_PARAMS = undefined;

export type T_NOTIFICATION_ITEM = {
  key: string;
  title: string;
  info: string;
  time: string;
};
