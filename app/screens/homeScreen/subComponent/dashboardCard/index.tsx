import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { IMAGES } from "../../../../../assets/images";
import { styles } from "./style";

const DashboardCard = () => {
  return (
    <ImageBackground
      source={IMAGES.HOME_IMG}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <View style={styles.mainContainer}>
        {/* TOP SECTION */}
        <View style={styles.innerContiner}>
          <View style={styles.textCard}>
            <Text style={styles.pText}>{"P"}</Text>
          </View>
          <View>
            <Text style={styles.morningText}>{"Good morning Emeka!"}</Text>
            <Text style={styles.volunteerText}>{"Volunteer"}</Text>
          </View>
        </View>
        <View style={styles.line} />
        {/* Bottom Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{"03"}</Text>
            <Text style={styles.statLabel}>{"Assigned"}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{"01"}</Text>
            <Text style={styles.statLabel}>{"Pending"}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{"02"}</Text>
            <Text style={styles.statLabel}>{"Completed"}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DashboardCard;
