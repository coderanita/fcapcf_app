import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { T_PROJECT_DETAILS_SCREEN } from "./types";
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
import { CalendarIcon, PersonIcon, PinIcon } from "../../../assets/icons";
import { horizontalScale } from "../../theme/responsive";

const ProjectDetailsScreen: React.FC<T_PROJECT_DETAILS_SCREEN> = ({
  navigation,
}) => {
  const strings = appStrings.projectDetailsScreen;

  const MemberItem = ({ color }: { color: string }) => {
    return (
      <View style={styles.memberItemContainer}>
        <View style={[styles.memberItemAvatar, { backgroundColor: color }]}>
          <Text style={styles.memberItemAvatarText}>{`SJ`}</Text>
        </View>
        <View style={styles.memberRightContainer}>
          <View style={styles.memberRightContent}>
            <Text style={styles.memberName}>{`Sulieman Joshua`}</Text>
            <Text style={styles.member}>{`Male  | 33 years`}</Text>
          </View>
          <BaseButton>
            <Text style={styles.memberRemoveBtn}>{`Update`}</Text>
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
              <Text style={styles.programTitle}>{strings.programTitle}</Text>
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
              <Text style={styles.programTitle}>
                {strings.beneficiariesTitle}
              </Text>
              <View style={globalStyles.rowGap16}>
                <MemberItem color="#42A7A7" />
                <MemberItem color="#42A7A7" />
                <MemberItem color="#42A7A7" />
                <MemberItem color="#42A7A7" />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={globalStyles.hPadding16}>
          <AppButton
            title={strings.backBtn}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default ProjectDetailsScreen;
