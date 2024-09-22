import { View, Text } from "react-native";
import React, { useState } from "react";
import { T_DATE_PICKER } from "./types";
import { styles } from "./styles";

import { appColors } from "../../theme/colors";
import moment from "moment";
import DateTimePickerModal from "../modals/dateTimePickerModal";
import { Controller } from "react-hook-form";

import BaseButton from "../buttons/baseButton";
import { CalendarIcon } from "../../../assets/icons";

// Going back 20 years for date
const initialDob = new Date();
initialDob.setFullYear(initialDob.getFullYear() - 20);

const DatePicker: React.FC<T_DATE_PICKER> = ({
  control,
  name,
  error,
  label,
  placeholder,
  width,
}) => {
  const [show, setShow] = useState(false);

  return (
    <View style={[styles.mainContainer, { width: width || "100%" }]}>
      <Text style={styles.label}>{label}</Text>
      <BaseButton
        onPress={() => {
          setShow(!show);
        }}
        otherProps={{
          style: styles.inputContainer,
        }}
      >
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <>
              {value ? (
                <Text
                  style={[styles.inputStyle, { color: appColors.primaryText }]}
                >
                  {moment(new Date(value)).format("DD MMMM YYYY")}
                </Text>
              ) : (
                <Text
                  style={[
                    styles.inputStyle,
                    { color: appColors.placeholderColor },
                  ]}
                >
                  {placeholder}
                </Text>
              )}
              <DateTimePickerModal
                visible={show}
                setVisible={setShow}
                selectedDate={value ? value : initialDob}
                onDateChange={(event, date) => {
                  if (date) {
                    onChange(date);
                  }
                }}
              />
            </>
          )}
        />
        <CalendarIcon />
      </BaseButton>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default DatePicker;
