import { View, Text, SectionList, FlatList } from "react-native";
import React from "react";
import { T_FILE_LIST_ITEM, T_FILE_MANAGER_SCREEN } from "./types";
import { globalStyles } from "../../theme/globalStyles";
import {
  AppButton,
  ScreenBg,
  ScreenWrapper,
  TabHeader,
} from "../../components";
import { IMAGES } from "../../../assets/images";
import { appStrings } from "../../config/appString";
import { styles } from "./styles";
import { CameraIcon } from "../../../assets/icons";
import FileCard from "./subcomponents/fileCard";
import { gotoHomeStackFromFileManagerStack } from "../../navigation/service";

const FileManagerScreen: React.FC<T_FILE_MANAGER_SCREEN> = ({ navigation }) => {
  const strings = appStrings.fileManagerScreen;

  const filesList: T_FILE_LIST_ITEM[] = [
    {
      title: strings.imageListTitle,
      data: [
        {
          key: "1",
          title: strings.fileTitle,
          size: strings.fileSize,
          takenDate: strings.fileDateTaken,
          type: "image",
        },
        {
          key: "2",
          title: strings.fileTitle,
          size: strings.fileSize,
          takenDate: strings.fileDateTaken,
          type: "image",
        },
      ],
    },
    {
      title: strings.videoListTitle,
      data: [
        {
          key: "1",
          title: strings.fileTitle,
          size: strings.fileSize,
          takenDate: strings.fileDateTaken,
          type: "video",
        },
        {
          key: "2",
          title: strings.fileTitle,
          size: strings.fileSize,
          takenDate: strings.fileDateTaken,
          type: "video",
        },
      ],
    },
  ];

  return (
    <View style={globalStyles.flexContainer}>
      <ScreenBg backgroundImage={IMAGES.TAB_BG} />
      <ScreenWrapper>
        <View style={[globalStyles.flexContainer, globalStyles.rowGap24]}>
          <TabHeader />
          <View
            style={[
              globalStyles.flexContainer,
              globalStyles.hPadding16,
              globalStyles.rowGap24,
            ]}
          >
            <Text style={styles.username}>{strings.username}</Text>
            <View style={globalStyles.authScreenHeader}>
              <Text style={globalStyles.authScreenTitle}>{strings.title}</Text>
            </View>
            <View style={globalStyles.flexContainer}>
              <View style={styles.body}>
                <SectionList
                  showsVerticalScrollIndicator={false}
                  sections={filesList}
                  keyExtractor={(item) => item.key}
                  stickyHeaderHiddenOnScroll={false}
                  stickySectionHeadersEnabled={false}
                  ListHeaderComponent={() => (
                    <View style={styles.uploadContainer}>
                      <CameraIcon />
                    </View>
                  )}
                  renderSectionHeader={({ section }) => (
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                  )}
                  renderItem={({ section }) => {
                    return (
                      <FlatList
                        showsVerticalScrollIndicator={false}
                        data={section.data}
                        keyExtractor={(item) => item.key}
                        numColumns={2}
                        columnWrapperStyle={styles.columnWrapper}
                        renderItem={({ item }) => <FileCard file={item} />}
                      />
                    );
                  }}
                />
              </View>
            </View>
            <AppButton
              title={strings.backBtn}
              onPress={() => {
                gotoHomeStackFromFileManagerStack(navigation);
              }}
            />
          </View>
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default FileManagerScreen;
