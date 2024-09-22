import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProjectsStackParamList } from "./types";
import { AddBeneficiaryScreen, ProjectsScreen } from "../../screens";

const Stack = createNativeStackNavigator<ProjectsStackParamList>();

const ProjectsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProjectsScreen"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="ProjectsScreen" component={ProjectsScreen} />
      <Stack.Screen
        name="AddBeneficiariyScreen"
        component={AddBeneficiaryScreen}
      />
    </Stack.Navigator>
  );
};

export default ProjectsStack;
