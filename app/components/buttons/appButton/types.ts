import { DimensionValue, GestureResponderEvent } from "react-native";

export type T_APP_BUTTON = {
  width?: DimensionValue;
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  bgColor?: string;
  loading?: boolean;
  titleColor?: string;
  isTransparent?: boolean;
};
