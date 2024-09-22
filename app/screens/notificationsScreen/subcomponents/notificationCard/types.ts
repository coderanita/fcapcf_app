import { GestureResponderEvent } from "react-native";
import { T_NOTIFICATION_ITEM } from "../../types";

export type T_NOTIFICATION_CARD = {
  notification: T_NOTIFICATION_ITEM;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
