import { View, Text, TextInput } from "react-native";
import React from "react";
import { T_APP_INPUT } from "./types";
import { styles } from "./styles";
import { appColors } from "../../theme/colors";
import { Controller } from "react-hook-form";
import { verticalScale } from "../../theme/responsive";

const AppInput: React.FC<T_APP_INPUT> = ({
  label,
  placeholder,
  name,
  control,
  errorText,
  isPassword,
  otherProps,
  isTextArea,
}) => {
  return (
    <View style={styles.mainContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          { height: isTextArea ? verticalScale(150) : verticalScale(64) },
        ]}
      >
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <TextInput
              {...otherProps}
              placeholder={placeholder}
              autoCapitalize="none"
              autoFocus={false}
              textAlignVertical={isTextArea ? "top" : "auto"}
              multiline={isTextArea}
              placeholderTextColor={appColors.placeholderColor}
              secureTextEntry={isPassword}
              onChangeText={onChange}
              value={value}
              style={styles.inputStyle}
            />
          )}
        />
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default AppInput;
