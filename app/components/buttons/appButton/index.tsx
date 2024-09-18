import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import { T_APP_BUTTON } from "./types";
import BaseButton from "../baseButton";
import { styles } from "./styles";
import { appColors } from "../../../theme/colors";

const AppButton: React.FC<T_APP_BUTTON> = ({
  width,
  title,
  onPress,
  disabled,
  bgColor,
  loading,
  titleColor,
}) => {
  return (
    <BaseButton
      onPress={onPress}
      otherProps={{
        disabled: disabled,
        style: [
          styles.mainContainer,
          {
            width: width ?? "100%",
            backgroundColor: bgColor ?? appColors.primary,
          },
        ],
      }}
    >
      {loading ? (
        <ActivityIndicator
          size={"small"}
          color={titleColor ?? appColors.inputBgColor}
        />
      ) : (
        <Text
          style={[
            styles.buttonTitle,
            {
              color: titleColor ?? appColors.inputBgColor,
            },
          ]}
        >
          {title}
        </Text>
      )}
    </BaseButton>
  );
};

export default AppButton;
