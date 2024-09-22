import { Platform, Text, View } from "react-native";
import React from "react";
import { T_DATE_TIME_PICKER_MODAL } from "./types";
import ReactNativeModal from "react-native-modal";
import { styles } from "./styles";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { appColors } from "../../../theme/colors";
import { globalStyles } from "../../../theme/globalStyles";
import BaseButton from "../../buttons/baseButton";

const DateTimePickerModal: React.FC<T_DATE_TIME_PICKER_MODAL> = ({
  visible,
  setVisible,
  selectedDate,
  onDateChange,
}) => {
  return (
    <ReactNativeModal
      isVisible={visible}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      onBackButtonPress={() => {
        setVisible(false);
      }}
      onBackdropPress={() => {
        setVisible(false);
      }}
      style={styles.modal}
    >
      <View style={[styles.mainContainer, globalStyles.screenPadding]}>
        <View style={[styles.innerContainer, globalStyles.screenPadding]}>
          <Text style={globalStyles.authScreenTitle}>{`Select Date`}</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode={"date"}
            is24Hour={false}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(
              event: DateTimePickerEvent,
              currentDate: Date | undefined
            ) => {
              if (Platform.OS === "ios") onDateChange(event, currentDate);
              else {
                onDateChange(event, currentDate);
                setVisible(false);
              }
            }}
          />
          <View style={styles.actionContainer}>
            <BaseButton
              onPress={() => {
                setVisible(false);
              }}
            >
              <Text
                style={[styles.buttonText, { color: appColors.secondaryText }]}
              >
                {`Cancel`}
              </Text>
            </BaseButton>
            <BaseButton
              onPress={() => {
                setVisible(false);
              }}
            >
              <Text
                style={[styles.buttonText, { color: appColors.secondaryBlack }]}
              >
                {`Okay`}
              </Text>
            </BaseButton>
          </View>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default DateTimePickerModal;
