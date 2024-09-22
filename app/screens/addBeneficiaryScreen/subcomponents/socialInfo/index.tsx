import { View } from "react-native";
import React from "react";
import {
  SOCIAL_INFO_SCHEMA,
  T_SOCIAL_INFO,
  T_SOCIAL_INFO_FIELDS,
} from "./types";
import { globalStyles } from "../../../../theme/globalStyles";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppButton, AppDropdown, AppInput } from "../../../../components";
import { appStrings } from "../../../../config/appString";
import { T_DROPDOWN_ITEM } from "../../../../components/appDropdown/types";

const SocialInfo: React.FC<T_SOCIAL_INFO> = ({ setCurrentIndex }) => {
  const { personalInfoScreen: strings, labels, placeholders } = appStrings;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_SOCIAL_INFO_FIELDS>({
    mode: "onChange",
    resolver: yupResolver(SOCIAL_INFO_SCHEMA),
  });

  const housingSizeDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "3",
      value: "3",
    },
    {
      key: "4",
      value: "4",
    },
  ];

  const educationLevelDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Primary",
      value: "Primary",
    },
    {
      key: "College",
      value: "College",
    },
  ];

  const housingStatusDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Rented",
      value: "Rented",
    },
    {
      key: "Owner",
      value: "Owner",
    },
  ];

  const vulnerabilityDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Single Parent",
      value: "Single Parent",
    },
  ];

  return (
    <View style={globalStyles.flexContainer}>
      <View
        style={[
          globalStyles.flexContainer,
          globalStyles.screenPadding,
          globalStyles.rowGap24,
        ]}
      >
        <View style={styles.bodyContainer}>
          <KeyboardAwareScrollView
            contentContainerStyle={globalStyles.rowGap24}
            showsVerticalScrollIndicator={false}
          >
            <AppInput
              label={labels.occupation}
              placeholder={placeholders.occupation}
              name="occupation"
              control={control}
              errorText={errors.occupation?.message}
            />
            <AppInput
              label={labels.income}
              placeholder={placeholders.income}
              name="income"
              control={control}
              errorText={errors.income?.message}
            />
            <View style={styles.row}>
              <AppDropdown
                width={"48%"}
                label={labels.houseHoldSize}
                placeholder={placeholders.houseHoldSize}
                dropdownValues={housingSizeDropdown}
                control={control}
                name="houseHoldSize"
                errorText={errors.houseHoldSize?.message}
              />
              <AppDropdown
                width={"48%"}
                label={labels.educationLevel}
                placeholder={placeholders.educationLevel}
                dropdownValues={educationLevelDropdown}
                control={control}
                name="educationLevel"
                errorText={errors.educationLevel?.message}
              />
            </View>
            <AppDropdown
              label={labels.housingStatus}
              placeholder={placeholders.housingStatus}
              dropdownValues={housingStatusDropdown}
              control={control}
              name="housingStatus"
              errorText={errors.housingStatus?.message}
            />
            <AppDropdown
              label={labels.vulnerability}
              placeholder={placeholders.vulnerability}
              dropdownValues={vulnerabilityDropdown}
              control={control}
              name="vulnerability"
              errorText={errors.vulnerability?.message}
            />
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={globalStyles.hPadding16}>
        <AppButton
          title={strings.continueBtn}
          onPress={() => {
            setCurrentIndex((prev) => prev + 1);
          }}
        />
      </View>
    </View>
  );
};

export default SocialInfo;
