import { View, Text } from "react-native";
import React, { useRef } from "react";
import { T_APP_PHONE_INPUT } from "./types";
import { styles } from "./styles";
import PhoneInput from "react-native-phone-number-input";
import { Controller } from "react-hook-form";
import { ChevronRight } from "../../../assets/icons";

const AppPhoneInput: React.FC<T_APP_PHONE_INPUT> = ({
  label,
  placeholder,
  name,
  control,
  width,
  errorText,
}) => {
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <View style={[styles.mainContainer, { width: width || "100%" }]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PK"
            layout="second"
            onChangeText={onChange}
            placeholder={placeholder}
            codeTextStyle={styles.codeTextStyle}
            textInputStyle={styles.inputStyle}
            containerStyle={styles.containerStyle}
            textContainerStyle={styles.textContainerStyle}
            renderDropdownImage={<ChevronRight style={styles.arrowStyle} />}
          />
        )}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default AppPhoneInput;
