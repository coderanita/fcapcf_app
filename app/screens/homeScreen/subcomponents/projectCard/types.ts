import { GestureResponderEvent } from "react-native";
import { T_PROJECT_ITEM } from "../../types";

export type T_PROJECT_CARD = {
  project: T_PROJECT_ITEM;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};
