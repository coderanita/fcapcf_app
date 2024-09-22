import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  CHANGE_PASSWORD_FORM_VALIDATION,
  T_CHANGE_PASSWORD_FORM,
  T_CHANGE_PASSWORD_SCREEN,
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

const ChangePasswordScreen: React.FC<T_CHANGE_PASSWORD_SCREEN> = ({
  navigation,
}) => {
  const { changePasswordScreen: strings, labels, placeholders } = appStrings;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_CHANGE_PASSWORD_FORM>({
    mode: "onChange",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(CHANGE_PASSWORD_FORM_VALIDATION),
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
              <View style={[styles.menuContainer]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={globalStyles.rowGap32}
                >
                  <AppInput
                    name="currentPassword"
                    control={control}
                    label={labels.currentPassword}
                    placeholder={placeholders.currenPassword}
                    errorText={errors.currentPassword?.message}
                    isPassword
                  />
                  <AppInput
                    name="newPassword"
                    control={control}
                    label={labels.newPassword}
                    placeholder={placeholders.setNewPassword}
                    errorText={errors.newPassword?.message}
                    isPassword
                  />
                  <AppInput
                    name="confirmPassword"
                    control={control}
                    label={labels.confirmNewPassword}
                    placeholder={placeholders.reTypeNewPassword}
                    errorText={errors.confirmPassword?.message}
                    isPassword
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

export default ChangePasswordScreen;
