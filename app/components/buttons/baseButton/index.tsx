import { TouchableOpacity } from "react-native";
import React from "react";
import { T_BASE_BUTTON } from "./types";

const BaseButton: React.FC<T_BASE_BUTTON> = ({
  children,
  onPress,
  otherProps,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress} {...otherProps}>
      {children}
    </TouchableOpacity>
  );
};

export default BaseButton;
