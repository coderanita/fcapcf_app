import { View, Text } from "react-native";
import React from "react";
import { T_AUTH_HEADER } from "./types";
import { styles } from "./styles";
import AppLogo from "../../appLogo";
import { appColors } from "../../../theme/colors";
import { globalStyles } from "../../../theme/globalStyles";
import { verticalScale } from "../../../theme/responsive";

const AuthHeader: React.FC<T_AUTH_HEADER> = ({
  title,
  subtitle,
  subTitleColor,
}) => {
  return (
    <View style={styles.middleContainer}>
      <AppLogo />
      <View style={globalStyles.hvFlexColCenter}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && (
          <Text
            style={[
              styles.subtitle,
              {
                color: subTitleColor ? subTitleColor : appColors.extraLightGray,
              },
            ]}
          >
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
};

export default AuthHeader;
