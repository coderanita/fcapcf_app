import { View, Text, TextInput } from "react-native";
import React from "react";
import { T_TAB_HEADER } from "./types";
import { styles } from "./styles";
import { appColors } from "../../../theme/colors";
import { NotificationIcon } from "../../../../assets/icons";
import { globalStyles } from "../../../theme/globalStyles";
import { useNavigation } from "@react-navigation/native";
import BaseButton from "../../buttons/baseButton";
import { gotoNotificationsStack } from "../../../navigation/service";

const TabHeader: React.FC<T_TAB_HEADER> = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.mainContainer, globalStyles.screenPadding]}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={appColors.placeholderColor}
        style={styles.searchContainer}
      />
      <BaseButton
        onPress={() => {
          gotoNotificationsStack(navigation);
        }}
      >
        <NotificationIcon />
      </BaseButton>
      <View style={styles.profileIconContainer}>
        <Text style={styles.profileText}>{`P`}</Text>
      </View>
    </View>
  );
};

export default TabHeader;
