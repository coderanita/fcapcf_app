import { View } from "react-native";
import React from "react";
import { NEEDS_INFO_SCHEMA, T_NEEDS_INFO, T_NEEDS_INFO_FIELDS } from "./types";
import { globalStyles } from "../../../../theme/globalStyles";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppButton, AppDropdown, AppInput } from "../../../../components";
import { appStrings } from "../../../../config/appString";
import { T_DROPDOWN_ITEM } from "../../../../components/appDropdown/types";

const NeedsInfo: React.FC<T_NEEDS_INFO> = ({ setCurrentIndex }) => {
  const { personalInfoScreen: strings, labels, placeholders } = appStrings;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_NEEDS_INFO_FIELDS>({
    mode: "onChange",
    resolver: yupResolver(NEEDS_INFO_SCHEMA),
  });

  const healthStatusDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Healthy",
      value: "Healthy",
    },
    {
      key: "Not Healthy",
      value: "Not Healthy",
    },
  ];

  const tribeDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Igala",
      value: "Igala",
    },
    {
      key: "Igala 2",
      value: "Igala 2",
    },
  ];

  const religionDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Prefer not to say",
      value: "Prefer not to say",
    },
    {
      key: "Muslim",
      value: "Muslim",
    },
  ];

  const skillsDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Sewing machine",
      value: "Sewing machine",
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
              label={labels.assistanceRequire}
              placeholder={placeholders.assistanceRequire}
              name="typeOfAssistance"
              control={control}
              errorText={errors.typeOfAssistance?.message}
            />
            <AppInput
              label={labels.previousAssistance}
              placeholder={placeholders.previousAssistance}
              name="previousAssistance"
              control={control}
              errorText={errors.previousAssistance?.message}
            />
            <View style={styles.row}>
              <AppDropdown
                width={"48%"}
                label={labels.healthStatus}
                placeholder={placeholders.healthStatus}
                dropdownValues={healthStatusDropdown}
                control={control}
                name="healthStatus"
                errorText={errors.healthStatus?.message}
              />
              <AppDropdown
                width={"48%"}
                label={labels.tribe}
                placeholder={placeholders.tribe}
                dropdownValues={tribeDropdown}
                control={control}
                name="ethnicity"
                errorText={errors.ethnicity?.message}
              />
            </View>
            <AppDropdown
              label={labels.religion}
              placeholder={placeholders.religion}
              dropdownValues={religionDropdown}
              control={control}
              name="religion"
              errorText={errors.religion?.message}
            />
            <AppDropdown
              label={labels.skills}
              placeholder={placeholders.skills}
              dropdownValues={skillsDropdown}
              control={control}
              name="skills"
              errorText={errors.skills?.message}
            />
            <AppInput
              label={labels.referOrg}
              placeholder={placeholders.referOrg}
              name="referOrg"
              control={control}
              errorText={errors.referOrg?.message}
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

export default NeedsInfo;
