import { View, Text } from "react-native";
import React from "react";
import { T_NOTIFICATION_CARD } from "./types";
import { styles } from "./styles";
import { BaseButton } from "../../../../components";

const NotificationCard: React.FC<T_NOTIFICATION_CARD> = ({
  notification,
  onPress,
}) => {
  return (
    <BaseButton
      onPress={onPress}
      otherProps={{
        style: styles.mainContainer,
      }}
    >
      <View style={styles.leftContainer}>
        <Text style={styles.leftText}>{`P`}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{notification.title}</Text>
        <View>
          <Text style={styles.info}>{notification.info}</Text>
          <Text style={styles.time}>{notification.time}</Text>
        </View>
      </View>
    </BaseButton>
  );
};

export default NotificationCard;
