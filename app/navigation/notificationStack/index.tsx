import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotificationsStackParamList } from "./types";
import { NotificationDetailsScreen, NotificationsScreen } from "../../screens";

const Stack = createNativeStackNavigator<NotificationsStackParamList>();

const NotificationsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="NotificationsScreen"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen
        name="NotificationDetailsScreen"
        component={NotificationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default NotificationsStack;
