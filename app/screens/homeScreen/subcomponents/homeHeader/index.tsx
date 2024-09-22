import { View, Text, Image } from "react-native";
import React from "react";
import { T_HOME_HEADER } from "./types";
import { styles } from "./styles";
import { IMAGES } from "../../../../../assets/images";
import { globalStyles } from "../../../../theme/globalStyles";
import { appStrings } from "../../../../config/appString";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeHeader: React.FC<T_HOME_HEADER> = ({}) => {
  const insets = useSafeAreaInsets();
  const strings = appStrings.homeScreen;
  return (
    <View style={styles.mainContainer}>
     <Image
        source={IMAGES.HOME_HEADER_BG}
        resizeMode="cover"
        style={styles.imageContainer}
      />
      <View style={[styles.overlay, { paddingTop: insets.top }]}>
      
        <View style={styles.topContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{`P`}</Text>
          </View>
          <View style={globalStyles.rowGap4}>
            <Text style={styles.goodMorning}>{strings.goodMorning}</Text>
            <Text style={styles.userType}>{strings.userType}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerSection}>
            <Text style={styles.value}>{strings.assignedValue}</Text>
            <Text style={styles.label}>{strings.assignedLabel}</Text>
          </View>
          <View style={styles.bottomContainerSection}>
            <Text style={styles.value}>{strings.pendingValue}</Text>
            <Text style={styles.label}>{strings.pendingLabel}</Text>
          </View>
          <View style={styles.bottomContainerSection}>
            <Text style={styles.value}>{strings.completedValue}</Text>
            <Text style={styles.label}>{strings.completedLabel}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
