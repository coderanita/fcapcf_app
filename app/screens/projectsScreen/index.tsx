import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { T_PROJECTS_SCREEN } from "./types";
import { appStrings } from "../../config/appString";
import { globalStyles } from "../../theme/globalStyles";
import { IMAGES } from "../../../assets/images";
import {
  AppButton,
  BaseButton,
  ScreenBg,
  ScreenWrapper,
  TabHeader,
} from "../../components";
import { styles } from "./styles";
import {
  CalendarIcon,
  PersonIcon,
  PinIcon,
  UploadIcon,
} from "../../../assets/icons";
import { horizontalScale } from "../../theme/responsive";
import { gotoAddBeneficiariesFromProjects } from "../../navigation/service";

const ProjectsScreen: React.FC<T_PROJECTS_SCREEN> = ({ navigation }) => {
  const strings = appStrings.projectsScreen;

  const MemberItem = ({ color }: { color: string }) => {
    return (
      <View style={styles.memberItemContainer}>
        <View style={[styles.memberItemAvatar, { backgroundColor: color }]}>
          <Text style={styles.memberItemAvatarText}>{`GB`}</Text>
        </View>
        <View style={styles.memberRightContainer}>
          <View style={styles.memberRightContent}>
            <Text style={styles.memberName}>{`Godsent Bryan`}</Text>
            <Text style={styles.member}>{`member`}</Text>
          </View>
          <BaseButton>
            <Text style={styles.memberRemoveBtn}>{`Remove`}</Text>
          </BaseButton>
        </View>
      </View>
    );
  };

  return (
    <View style={globalStyles.flexContainer}>
      <ScreenBg backgroundImage={IMAGES.TAB_BG} />
      <ScreenWrapper>
        <TabHeader />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
          contentContainerStyle={globalStyles.rowGap24}
        >
          <View>
            <View style={[globalStyles.hPadding16, globalStyles.rowGap12]}>
              <View style={styles.topBanner}>
                <Text
                  style={styles.offlineData}
                >{`${strings.offlineDataLabel} : ${strings.offlineDataValue}`}</Text>
                <View style={styles.uploadContainer}>
                  <UploadIcon />
                  <Text
                    style={styles.clickToUpload}
                  >{`${strings.clickToUpload}`}</Text>
                </View>
              </View>
              <View style={styles.projectCoverContainer}>
                <Image
                  source={IMAGES.PROJECT_COVER}
                  resizeMode="cover"
                  style={styles.projectCover}
                />
              </View>
              <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                  <CalendarIcon width={horizontalScale(9)} />
                  <Text style={styles.infoTitle}>{strings.date}</Text>
                </View>
                <View style={styles.infoItem}>
                  <PinIcon width={horizontalScale(9)} />
                  <Text style={styles.infoTitle}>{strings.location}</Text>
                </View>
                <View style={styles.infoItem}>
                  <PersonIcon width={horizontalScale(9)} />
                  <View style={styles.beneficiariesContainer}>
                    <Text style={styles.infoTitle}>
                      {strings.beneficiaries}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[globalStyles.hPadding16, globalStyles.rowGap24]}>
            <View style={styles.body}>
              <Text style={styles.programTitle}>{strings.programTitle}</Text>
              <Text style={styles.programInfo}>{strings.programInfo}</Text>
              <Text style={styles.programTitle}>{strings.projectMembers}</Text>
              <View style={globalStyles.rowGap16}>
                <MemberItem color="#42A7A7" />
                <MemberItem color="#913AFF" />
                <MemberItem color="#B7B7B7" />
                <MemberItem color="#FFC700" />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={globalStyles.hPadding16}>
          <AppButton
            title={strings.addBtn}
            onPress={() => {
              gotoAddBeneficiariesFromProjects(navigation);
            }}
          />
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default ProjectsScreen;
