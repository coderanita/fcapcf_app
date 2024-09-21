import { View, Text } from "react-native";
import React from "react";
import { T_HOME_SCREEN } from "./type";
import { ScreenWrapper } from "../../components";
import DashboardCard from "./subComponent/dashboardCard";
import { styles } from "./style";
import { FlatList } from "react-native-gesture-handler";
import ProjectCard from "./subComponent/projectCard";
import { appColors } from "../../theme/colors";
import { IMAGES } from "../../../assets/images";

const HomeScreen: React.FC<T_HOME_SCREEN> = () => {
  return (
    <ScreenWrapper bgColor={appColors.screenBackground}>
      {/* TOP CONTENT */}
      <DashboardCard />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{"My Projects"}</Text>
      </View>
      {/* CARD CONTENT */}
      <FlatList
        data={[IMAGES.PROJECT_IMG, IMAGES.PROJECT_IMG1, IMAGES.PROJECT_IMG2]}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={(item) => {
          return <ProjectCard projectCardImg={item.item} key={item.index} />;
        }}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
