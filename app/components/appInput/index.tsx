import { View, Text, TextInput } from "react-native";
import React from "react";
import { T_APP_INPUT } from "./types";
import { styles } from "./styles";
import { appColors } from "../../theme/colors";
import { Controller } from "react-hook-form";

const AppInput: React.FC<T_APP_INPUT> = ({
  label,
  placeholder,
  inputName,
  control,
  errorText,
  numbKeyBoardType,
}) => {
  return (
    <View style={styles.mainContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: appColors.inputBg,
          },
        ]}
      >
        <Controller
          name={inputName}
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={appColors.lightGray}
              keyboardType={numbKeyBoardType ? "number-pad" : "default"}
              onChangeText={onChange}
              value={value}
              blurOnSubmit={true}
              textAlignVertical="top"
              style={[styles.inputStyle, { color: appColors.black }]}
            />
          )}
        />
      </View>
      {errorText && (
        <Text style={[styles.inputError, { color: appColors.red }]}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

export default AppInput;
