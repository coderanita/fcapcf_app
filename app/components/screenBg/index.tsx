import React from "react";
import { ImageBackground } from "react-native";
import { T_SCREEN_BG } from "./type";

const ScreenBg: React.FC<T_SCREEN_BG> = ({ children, backgroundImage }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      {children}
    </ImageBackground>
  );
};

export default ScreenBg;
