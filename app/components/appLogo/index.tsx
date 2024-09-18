import React from "react";
import { T_APP_LOGO } from "./types";
import { IMAGES } from "../../../assets/images";
import { Image } from "react-native";
import { styles } from "./styles";

const AppLogo: React.FC<T_APP_LOGO> = () => {
  return (
    <Image source={IMAGES.LOGO} resizeMode="contain" style={styles.logoStyle} />
  );
};

export default AppLogo;
