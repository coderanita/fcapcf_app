import { AuthStackParamList } from "../authStack/types";
import { BottomTabsParamList } from "../bottomTabs/types";
import { NotificationsStackParamList } from "../notificationStack/types";

export type RootStackParamList = {
  AuthStack: AuthStackParamList;
  BottomTabs: BottomTabsParamList;
  NotificationsStack: NotificationsStackParamList;
};
