import { View, Text, FlatList } from "react-native";
import React from "react";
import { T_NOTIFICATION_ITEM, T_NOTIFICATIONS_SCREEN } from "./types";
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
import NotificationCard from "./subcomponents/notificationCard";
import { gotoNotificationDetailsFromNotitications } from "../../navigation/service";

const NotificationsScreen: React.FC<T_NOTIFICATIONS_SCREEN> = ({
  navigation,
}) => {
  const strings = appStrings.notificationsScreen;

  const notifications: T_NOTIFICATION_ITEM[] = [
    {
      key: "1",
      title: strings.notifTitle,
      info: strings.notifInfo,
      time: strings.notifTime,
    },
    {
      key: "2",
      title: strings.notifTitle,
      info: strings.notifInfo,
      time: strings.notifTime,
    },
    {
      key: "3",
      title: strings.notifTitle,
      info: strings.notifInfo,
      time: strings.notifTime,
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
              <Text style={globalStyles.authScreenInfo}>{strings.info}</Text>
            </View>
            <View style={globalStyles.flexContainer}>
              <View style={styles.body}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={notifications}
                  contentContainerStyle={globalStyles.rowGap12}
                  keyExtractor={(item) => item.key}
                  renderItem={({ item }) => (
                    <NotificationCard
                      onPress={() => {
                        gotoNotificationDetailsFromNotitications(navigation);
                      }}
                      notification={item}
                    />
                  )}
                />
              </View>
            </View>
            <AppButton
              title={strings.backBtn}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default NotificationsScreen;
