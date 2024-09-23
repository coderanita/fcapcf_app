import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "./types";
import {
  ChangePasswordScreen,
  ContactSupportScreen,
  CreateFaqScreen,
  MyAccountScreen,
  NeedHelpScreen,
  ProfileScreen,
} from "../../screens";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="NeedHelpScreen" component={NeedHelpScreen} />
      <Stack.Screen
        name="ContactSupportScreen"
        component={ContactSupportScreen}
      />
      <Stack.Screen name="CreateFaqScreen" component={CreateFaqScreen} />
      <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
