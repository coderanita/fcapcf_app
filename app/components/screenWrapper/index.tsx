import React from "react";
import { T_SCREEN_WRAPPER } from "./types";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import { styles } from "./styles";

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
