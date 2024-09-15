import React from "react";
import { GestureResponderEvent, TouchableOpacityProps } from "react-native";

export type T_BASE_BUTTON = {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  otherProps?: TouchableOpacityProps;
};
