import React from "react";
import { Image, View } from "react-native";
import { T_SCREEN_BG } from "./types";
import { styles } from "./styles";

const ScreenBg: React.FC<T_SCREEN_BG> = ({ backgroundImage }) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
    </View>
  );
};

export default ScreenBg;
