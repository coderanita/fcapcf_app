import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthStack from "../authStack";
import BottomTabs from "../bottomTabs";
import NotificationsStack from "../notificationStack";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          animation: "fade_from_bottom",
          headerShown: false,
        }}
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen
          name="NotificationsStack"
          component={NotificationsStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
