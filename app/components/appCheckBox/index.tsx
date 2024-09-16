import { View, Text } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import { T_APP_CHECK_BOX } from "./type";
import { styles } from "./styles";
import { appColors } from "../../theme/colors";

const AppCheckBox: React.FC<T_APP_CHECK_BOX> = ({ title }) => {
  const [checked, setChecked] = React.useState<boolean>(false);
  return (
    <View style={styles.mainContainer}>
      <Checkbox
        value={checked}
        color={checked ? appColors.green : appColors.lightGray}
        onValueChange={() => setChecked(!checked)}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AppCheckBox;
