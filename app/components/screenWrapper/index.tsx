import React from "react";
import { T_SCREEN_WRAPPER } from "./types";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import { styles } from "./styles";
import { Platform } from "react-native";
import { verticalScale } from "../../theme/responsive";

const ScreenWrapper: React.FC<T_SCREEN_WRAPPER> = ({ children, bgColor }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={[
        styles.mainContainer,
        { backgroundColor: bgColor ?? "transparent" },
      ]}
    >
      <Animated.View
        style={[
          styles.mainContainer,
          {
            backgroundColor: bgColor ?? "transparent",
            paddingTop: Platform.OS == "ios" ? insets.top : verticalScale(42),
            paddingBottom:
              Platform.OS === "ios" ? insets.bottom / 2 : verticalScale(24),
          },
        ]}
      >
        {children}
      </Animated.View>
    </SafeAreaProvider>
  );
};

export default ScreenWrapper;
