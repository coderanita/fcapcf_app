import React from "react";
import { T_SCREEN_WRAPPER } from "./types";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import { styles } from "./styles";
import { appColors } from "../../theme/colors";

const ScreenWrapper: React.FC<T_SCREEN_WRAPPER> = ({ children, bgColor }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={[
        styles.mainContainer,
        { backgroundColor: bgColor ?? appColors.white },
      ]}
    >
      <Animated.View
        style={[
          styles.mainContainer,
          {
            backgroundColor: bgColor ?? appColors.white,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
          },
        ]}
      >
        {children}
      </Animated.View>
    </SafeAreaProvider>
  );
};

export default ScreenWrapper;
