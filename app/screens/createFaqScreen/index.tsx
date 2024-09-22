import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  CREATE_FAQ_FORM_VALIDATION,
  T_CREATE_FAQ_FORM,
  T_CREATE_FAQ_SCREEN,
} from "./types";
import { globalStyles } from "../../theme/globalStyles";
import {
  AppButton,
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

const CreateFaqScreen: React.FC<T_CREATE_FAQ_SCREEN> = ({ navigation }) => {
  const { createFAQScreen: strings, labels, placeholders } = appStrings;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_CREATE_FAQ_FORM>({
    mode: "onChange",
    defaultValues: {
      title: "",
      response: "",
    },
    resolver: yupResolver(CREATE_FAQ_FORM_VALIDATION),
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
                  <AppInput
                    name="title"
                    control={control}
                    isPassword={false}
                    label={labels.faqTitle}
                    placeholder={placeholders.faqTitle}
                    errorText={errors.title?.message}
                  />
                  <AppInput
                    name="response"
                    control={control}
                    label={labels.faqResponse}
                    isTextArea
                    placeholder={placeholders.faqResponse}
                    errorText={errors.response?.message}
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

export default CreateFaqScreen;
