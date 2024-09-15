import { Text, View } from "react-native";
import React from "react";
import { T_APP_BUTTON } from "./types";
import BaseButton from "../baseButton";
import { styles } from "./styles";
import { appColors } from "../../../theme/colors";

const AppButton: React.FC<T_APP_BUTTON> = ({
  width,
  title,
  type,
  icon,
  onPress,
  disabled,
}) => {
  return (
    <BaseButton
      onPress={onPress}
      otherProps={{
        disabled: disabled,
        style: [{ width: width ? width : "100%" }],
      }}
    >
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor: appColors.green,
          },
        ]}
      >
        <Text
          style={[
            styles.buttonTitle,
            {
              color: appColors.white,
            },
          ]}
        >
          {title}
        </Text>
      </View>
    </BaseButton>
  );
};

export default AppButton;
