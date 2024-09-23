import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthStack from "../authStack";
import BottomTabs from "../bottomTabs";
import NotificationsStack from "../notificationStack";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { user } = useSelector((state: RootState) => state.userSlice);
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          animation: "fade_from_bottom",
          headerShown: false,
        }}
      >
        {user ? (
          <Stack.Group>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen
              name="NotificationsStack"
              component={NotificationsStack}
            />
          </Stack.Group>
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
