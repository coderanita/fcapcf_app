import { FlatList, Text, View } from "react-native";
import React from "react";
import { T_HOME_SCREEN, T_PROJECT_ITEM } from "./types";
import HomeHeader from "./subcomponents/homeHeader";
import { globalStyles } from "../../theme/globalStyles";
import { appStrings } from "../../config/appString";
import { styles } from "./styles";
import { appColors } from "../../theme/colors";
import ProjectCard from "./subcomponents/projectCard";
import { gotoProjectDetailsFromHome } from "../../navigation/service";

const HomeScreen: React.FC<T_HOME_SCREEN> = ({ navigation }) => {
  const strings = appStrings.homeScreen;

  const projects: T_PROJECT_ITEM[] = [
    {
      key: `1`,
      title: "Project Title",
      info: `Sit aliqua non sunt laborum ullamco quis id velit. Dolore pariatur commodo aliquip nostrud pariatur sint nostrud non est ipsum ex ex fugiat. Velit cillum laborum sint elit exercitation consequat consectetur nostrud. Commodo esse deserunt voluptate aute fugiat do et ea anim commodo aliquip laboris. Nostrud sit non proident qui sit aliqua est. Reprehenderit sint excepteur id consequat id duis deserunt qui nostrud ut culpa incididunt anim.`,
      date: `5 Aug, 2024`,
      location: `NW - Nigeria`,
    },
    {
      key: `2`,
      title: "Project Title",
      info: `Sit aliqua non sunt laborum ullamco quis id velit. Dolore pariatur commodo aliquip nostrud pariatur sint nostrud non est ipsum ex ex fugiat. Velit cillum laborum sint elit exercitation consequat consectetur nostrud. Commodo esse deserunt voluptate aute fugiat do et ea anim commodo aliquip laboris. Nostrud sit non proident qui sit aliqua est. Reprehenderit sint excepteur id consequat id duis deserunt qui nostrud ut culpa incididunt anim.`,
      date: `5 Aug, 2024`,
      location: `NW - Nigeria`,
    },
    {
      key: `3`,
      title: "Project Title",
      info: `Sit aliqua non sunt laborum ullamco quis id velit. Dolore pariatur commodo aliquip nostrud pariatur sint nostrud non est ipsum ex ex fugiat. Velit cillum laborum sint elit exercitation consequat consectetur nostrud. Commodo esse deserunt voluptate aute fugiat do et ea anim commodo aliquip laboris. Nostrud sit non proident qui sit aliqua est. Reprehenderit sint excepteur id consequat id duis deserunt qui nostrud ut culpa incididunt anim.`,
      date: `5 Aug, 2024`,
      location: `NW - Nigeria`,
    },
  ];

  return (
    <View
      style={[
        globalStyles.flexContainer,
        { backgroundColor: appColors.secondaryBgColor },
      ]}
    >
      <HomeHeader />
      <View
        style={[
          globalStyles.flexContainer,
          globalStyles.screenPadding,
          globalStyles.rowGap24,
        ]}
      >
        <Text style={styles.listHeading}>{strings.projectsListHeading}</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={projects}
          keyExtractor={(item) => item.key}
          contentContainerStyle={globalStyles.rowGap12}
          renderItem={({ item, index }) => (
            <ProjectCard
              project={item}
              onPress={() => {
                gotoProjectDetailsFromHome(navigation);
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
