import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FileManagerStackParamList } from "./types";
import { FileManagerScreen } from "../../screens";

const Stack = createNativeStackNavigator<FileManagerStackParamList>();

const FileManagerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FileManagerScreen"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="FileManagerScreen" component={FileManagerScreen} />
    </Stack.Navigator>
  );
};

export default FileManagerStack;
