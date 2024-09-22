import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { BottomTabsParamList } from "./types";
import HomeStack from "../homeStack";
import ProjectsStack from "../projectsStack";
import FileManagerStack from "../fileManagerStack";
import ProfileStack from "../profileStack";
import { appColors } from "../../theme/colors";
import { appStrings } from "../../config/appString";
import {
  ActiveFileManagerIcon,
  ActiveHomeIcon,
  ActiveProfileIcon,
  ActiveProjectsIcon,
  InActiveFileManagerIcon,
  InActiveHomeIcon,
  InActiveProfileIcon,
  InActiveProjectsIcon,
} from "../../../assets/icons";
import { appTypography } from "../../theme/typography";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { horizontalScale } from "../../theme/responsive";

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs = () => {
  const strings = appStrings.bottomTabs;

  const CustomTabbar = ({
    state,
    descriptors,
    navigation,
  }: BottomTabBarProps) => {
    return (
      <View style={styles.mainContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? "";
          const icon = options.tabBarIcon;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabContainer}
            >
              {isFocused && <View style={styles.indicator} />}
              {icon &&
                icon({
                  focused: isFocused,
                  color: isFocused
                    ? appColors.primary
                    : appColors.tabInActiveColor,
                  size: horizontalScale(20),
                })}
              <Text
                style={[
                  styles.tabLabelStyle,
                  {
                    color: isFocused
                      ? appColors.primary
                      : appColors.tabInActiveColor,
                  },
                ]}
              >
                {/* @ts-ignore */}
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tabs.Navigator
      initialRouteName="HomeStack"
      tabBar={(props: BottomTabBarProps) => <CustomTabbar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.primary,
        tabBarInactiveTintColor: appColors.tabInActiveColor,
        tabBarLabelStyle: {
          ...appTypography.REGULAR.F_12,
        },
      }}
    >
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: strings.home,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveHomeIcon /> : <InActiveHomeIcon />,
        }}
      />
      <Tabs.Screen
        name="ProjectsStack"
        component={ProjectsStack}
        options={{
          tabBarLabel: strings.projects,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveProjectsIcon /> : <InActiveProjectsIcon />,
        }}
      />
      <Tabs.Screen
        name="FileManagerStack"
        component={FileManagerStack}
        options={{
          tabBarLabel: strings.fileManager,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveFileManagerIcon /> : <InActiveFileManagerIcon />,
        }}
      />
      <Tabs.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: strings.profile,
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveProfileIcon /> : <InActiveProfileIcon />,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
