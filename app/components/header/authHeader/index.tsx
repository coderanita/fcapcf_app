import { View, Text } from "react-native";
import React from "react";
import { T_AUTH_HEADER } from "./types";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppLogo } from "../../../../assets";

const AuthHeader: React.FC<T_AUTH_HEADER> = ({ title, subtitle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.middleContainer}>
        <AppLogo />
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
};

export default AuthHeader;
