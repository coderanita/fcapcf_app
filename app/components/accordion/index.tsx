import { View, Text } from "react-native";
import React from "react";
import { T_ACCORDION } from "./types";
import { styles } from "./styles";
import { ChevronRight } from "../../../assets/icons";
import BaseButton from "../buttons/baseButton";
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { verticalScale } from "../../theme/responsive";
import { appSpacings } from "../../theme/others";

const EXTRA_HEIGHT = verticalScale(appSpacings[12]);

const Accordion: React.FC<T_ACCORDION> = ({ heading, content }) => {
  const animatedRef = useAnimatedRef<Animated.View>();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);

  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  );

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${progress.value * -90}deg` }],
    };
  });

  const contentContainerAnimation = useAnimatedStyle(() => {
    return {
      height: heightValue.value,
    };
  });

  console.log("animatedRef", measure(animatedRef));

  return (
    <View style={styles.mainContainer}>
      <BaseButton
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              "worklet";
              heightValue.value = withTiming(
                measure(animatedRef)!.height + EXTRA_HEIGHT
              );
            })();
          } else {
            heightValue.value = withTiming(0);
          }
          open.value = !open.value;
        }}
        otherProps={{
          style: styles.headerContainer,
        }}
      >
        <Text style={styles.heading}>{heading}</Text>
        <Animated.View style={animatedIconStyle}>
          <ChevronRight />
        </Animated.View>
      </BaseButton>

      <Animated.View style={contentContainerAnimation}>
        <Animated.View ref={animatedRef} style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;
