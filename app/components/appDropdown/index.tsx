import { View, Text } from "react-native";
import React from "react";
import { T_APP_DROPDOWN } from "./types";
import { styles } from "./styles";
import { appColors } from "../../theme/colors";
import { Controller } from "react-hook-form";
import { ChevronRight } from "../../../assets/icons";
import { SelectList } from "react-native-dropdown-select-list";

const AppDropdown: React.FC<T_APP_DROPDOWN> = ({
  label,
  placeholder,
  name,
  control,
  errorText,
  dropdownValues,
  width,
}) => {
  return (
    <View style={[styles.mainContainer, { width: width || "100%" }]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <SelectList
            setSelected={onChange}
            data={dropdownValues}
            save="value"
            placeholder={placeholder}
            boxStyles={styles.inputContainer}
            inputStyles={{
              ...styles.inputStyle,
              color: value ? appColors.primaryText : appColors.placeholderColor,
            }}
            dropdownStyles={styles.dropdownContainer}
            dropdownItemStyles={styles.dropdownItem}
            dropdownTextStyles={styles.dropdownItemText}
            search={false}
            arrowicon={<ChevronRight style={styles.arrow} />}
          />
        )}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default AppDropdown;
