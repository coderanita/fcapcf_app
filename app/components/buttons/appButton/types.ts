import React from "react";
import { DimensionValue, GestureResponderEvent } from "react-native";

export type T_APP_BUTTON = {
  title: string;
  width?: DimensionValue;
  icon?: React.ReactNode;
  type?: "default" | "focused" | "icon-leading";
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
};
