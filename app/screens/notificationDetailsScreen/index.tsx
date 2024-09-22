import { View, Text, ScrollView } from "react-native";
import React from "react";
import { T_NOTIFICATION_DETAILS_SCREEN } from "./types";
import { globalStyles } from "../../theme/globalStyles";
import {
  AppButton,
  BaseButton,
  ScreenBg,
  ScreenWrapper,
  TabHeader,
} from "../../components";
import { IMAGES } from "../../../assets/images";
import { appStrings } from "../../config/appString";
import { styles } from "./styles";

const NotificationDetailsScreen: React.FC<T_NOTIFICATION_DETAILS_SCREEN> = ({
  navigation,
}) => {
  const strings = appStrings.notificationDetailsScreen;

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
              <Text style={globalStyles.authScreenInfo}>{strings.info}</Text>
            </View>
            <View style={globalStyles.flexContainer}>
              <View style={styles.body}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={styles.scrollContainer}
                  contentContainerStyle={styles.scrollContentContainer}
                >
                  <View style={styles.mainContainer}>
                    <View style={styles.leftContainer}>
                      <Text style={styles.leftText}>{`P`}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text style={styles.title}>{strings.notifTitle}</Text>
                      <Text style={styles.info}>{strings.notifInfo}</Text>
                    </View>
                  </View>
                </ScrollView>
                <BaseButton
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Text style={styles.backBtn}>{strings.backBtn}</Text>
                </BaseButton>
              </View>
            </View>
          </View>
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default NotificationDetailsScreen;
