import { View, Text, ScrollView } from "react-native";
import React from "react";
import { T_PROFILE_SCREEN } from "./types";
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
import {
  ChevronRight,
  HelpIcon,
  LockIcon,
  LogoutIcon,
  ProfileIcon2,
} from "../../../assets/icons";
import {
  gotoHomeStackFromProfileStack,
  gotoSubMenuFromProfile,
} from "../../navigation/service";
import { useDispatch } from "react-redux";
import { actionSetUser } from "../../state/slices/user.slice";

const ProfileScreen: React.FC<T_PROFILE_SCREEN> = ({ navigation }) => {
  const dispatch = useDispatch();
  const strings = appStrings.profileScreen;

  const menuItems = [
    {
      key: "1",
      icon: <ProfileIcon2 />,
      title: strings.myAccount,
      onPress: () => {
        gotoSubMenuFromProfile(navigation, "MyAccountScreen");
      },
    },
    {
      key: "2",
      icon: <LockIcon />,
      title: strings.changePassword,
      onPress: () => {
        gotoSubMenuFromProfile(navigation, "ChangePasswordScreen");
      },
    },
    {
      key: "3",
      icon: <HelpIcon />,
      title: strings.helpCenter,
      onPress: () => {
        gotoSubMenuFromProfile(navigation, "NeedHelpScreen");
      },
    },
    {
      key: "4",
      icon: <LogoutIcon />,
      title: strings.logout,
      onPress: () => {
        dispatch(actionSetUser(null));
      },
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
            <View style={globalStyles.flexContainer}>
              <View style={styles.menuContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {menuItems.map((item) => (
                    <BaseButton
                      onPress={item.onPress}
                      key={item.key}
                      otherProps={{
                        style: styles.itemContainer,
                      }}
                    >
                      <View style={styles.iconContainer}>{item.icon}</View>
                      <View style={styles.itemContentContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <View style={styles.separator} />
                      </View>
                      <ChevronRight />
                    </BaseButton>
                  ))}
                </ScrollView>
              </View>
            </View>
            <AppButton
              title={strings.backBtn}
              onPress={() => {
                gotoHomeStackFromProfileStack(navigation);
              }}
            />
          </View>
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default ProfileScreen;
