import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackParamList } from "./type";
import HomeScreen from "../../screens/homeScreen";
import { appColors } from "../../theme/colors";
import { styles } from "./style";
import {
  FileManagerIcon,
  HomeIcon,
  ProfileIcon,
  ProjectIcon,
} from "../../../assets/icons";
import { TouchableOpacity } from "react-native";
import { horizontalScale, moderateScale } from "../../theme/responsive";

const Tab = createBottomTabNavigator<HomeStackParamList>();

const HomeStack = () => {
  const MyTabs = (props: any) => (
    <TouchableOpacity
      {...props}
      style={
        props.accessibilityState.selected
          ? [
              props.style,
              {
                borderTopColor: appColors.primary,
                borderTopWidth: moderateScale(2),
              },
            ]
          : props.style
      }
    />
  );
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.primary,
        tabBarStyle: styles.tabBarStyle,
        unmountOnBlur: true,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarInactiveTintColor: appColors.primaryText,
        tabBarButton: MyTabs,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProjectsScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Project",
          tabBarIcon: ({ color, size }) => (
            <ProjectIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FileManagerScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "File Manager",
          tabBarIcon: ({ color, size }) => (
            <FileManagerIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
