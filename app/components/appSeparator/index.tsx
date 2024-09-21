import { View, Text } from "react-native";
import React from "react";
import { T_APP_SEPARATOR } from "./type";
import { styles } from "./style";
import { appColors } from "../../theme/colors";

const AppSepartor: React.FC<T_APP_SEPARATOR> = ({ lineColor, width }) => {
  return (
    <View
      style={[
        styles.line,
        {
          backgroundColor: lineColor ? lineColor : appColors.appSeparator,
          width: width ? width : "100%",
        },
      ]}
    />
  );
};

export default AppSepartor;
