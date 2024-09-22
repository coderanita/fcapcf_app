import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  CONTACT_SUPPORT_FORM_VALIDATION,
  T_CONTACT_SUPPORT_FORM,
  T_CONTACT_SUPPORT_SCREEN,
} from "./types";
import { globalStyles } from "../../theme/globalStyles";
import {
  AppButton,
  AppDropdown,
  AppInput,
  ScreenBg,
  ScreenWrapper,
  TabHeader,
} from "../../components";
import { IMAGES } from "../../../assets/images";
import { appStrings } from "../../config/appString";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { T_DROPDOWN_ITEM } from "../../components/appDropdown/types";

const ContactSupportScreen: React.FC<T_CONTACT_SUPPORT_SCREEN> = ({
  navigation,
}) => {
  const { contactSupportScreen: strings, labels, placeholders } = appStrings;

  const issueTypes: T_DROPDOWN_ITEM[] = [
    {
      key: "issue-type-1",
      value: "Issue Type 1",
    },
    {
      key: "issue-type-2",
      value: "Issue Type 2",
    },
    {
      key: "issue-type-3",
      value: "Issue Type 3",
    },
  ];

  const toTypes: T_DROPDOWN_ITEM[] = [
    {
      key: "technical-team",
      value: "Technicals",
    },
    {
      key: "management-team",
      value: "Management",
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_CONTACT_SUPPORT_FORM>({
    mode: "onChange",
    defaultValues: {
      issuesDropdown: "",
      toDropdown: "",
      message: "",
    },
    resolver: yupResolver(CONTACT_SUPPORT_FORM_VALIDATION),
  });

  const onSubmitClick = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.flexContainer}>
      <ScreenBg backgroundImage={IMAGES.TAB_BG} />
      <ScreenWrapper>
        <View style={[globalStyles.flexContainer, globalStyles.rowGap24]}>
          <TabHeader />
          <View
            style={[
              globalStyles.flexContainer,
              globalStyles.hPadding16,
              globalStyles.rowGap24,
            ]}
          >
            <Text style={styles.username}>{strings.username}</Text>
            <View style={globalStyles.authScreenHeader}>
              <Text style={globalStyles.authScreenTitle}>{strings.title}</Text>
              <Text style={globalStyles.authScreenInfo}>{strings.info}</Text>
            </View>
            <View style={globalStyles.flexContainer}>
              <View style={[styles.body]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={globalStyles.rowGap32}
                >
                  <AppDropdown
                    name="issuesDropdown"
                    dropdownValues={issueTypes}
                    label={labels.issueType}
                    control={control}
                    placeholder={placeholders.issueType}
                    errorText={errors.issuesDropdown?.message}
                  />
                  <AppDropdown
                    name="toDropdown"
                    dropdownValues={toTypes}
                    label={labels.to}
                    control={control}
                    placeholder={placeholders.to}
                    errorText={errors.toDropdown?.message}
                  />
                  <AppInput
                    name="message"
                    control={control}
                    label={labels.message}
                    isTextArea
                    placeholder={placeholders.message}
                    errorText={errors.message?.message}
                  />
                </ScrollView>
              </View>
            </View>
            <AppButton
              title={strings.submitBtn}
              onPress={handleSubmit(onSubmitClick)}
            />
          </View>
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default ContactSupportScreen;
