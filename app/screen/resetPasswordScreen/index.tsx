import { View, Text } from "react-native";
import React from "react";
import {
  RESET_PASSWORD_FORM_VALIDATION,
  T_RESET_PASSWORD_FORM,
  T_RESET_PASSWORD_SCREEN,
} from "./type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  AppButton,
  AppInput,
  AuthHeader,
  BaseButton,
  ScreenBg,
  ScreenWrapper,
} from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles } from "../../theme/globalStyles";
import { styles } from "./style";
import { appStrings } from "../../config/appString";
import { appColors } from "../../theme/colors";

const ResetPasswordScreen: React.FC<T_RESET_PASSWORD_SCREEN> = () => {
  const { resetPasswordScreen: strings, labels, placeHolder } = appStrings;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_RESET_PASSWORD_FORM>({
    mode: "onChange",
    defaultValues: {
      newPassword: "Justdoit@123",
      confirmPassword: "Justdoit@123",
    },
    resolver: yupResolver(RESET_PASSWORD_FORM_VALIDATION),
  });
  const onForgotPasswordPress = () => {};
  return (
    <ScreenWrapper>
      <ScreenBg backgroundImage={require("../../../assets/imageAuth1.png")}>
        <KeyboardAwareScrollView
          contentContainerStyle={[
            globalStyles.authScreenPadding,
            styles.mainContainer,
          ]}
        >
          <AuthHeader
            title={strings.title}
            subtitle={strings.subTitle}
            subTitleColor={appColors.mediumGrey}
          />
          <View style={styles.topContainer}>
            <AppInput
              inputName={"newPassword"}
              control={control}
              label={labels.newPassword}
              placeholder={placeHolder.enterNewPassword}
              errorText={errors.newPassword?.message}
              hidePassword={true}
            />
            <AppInput
              inputName={"confirmPassword"}
              control={control}
              label={labels.confirmPassword}
              placeholder={placeHolder.confirmNewPassword}
              errorText={errors.confirmPassword?.message}
              hidePassword={true}
            />
          </View>
          <View style={styles.bottomContainer}>
            <AppButton
              title={strings.setThisPassword}
              onPress={handleSubmit(onForgotPasswordPress)}
            />
            <View style={styles.linkTextContainer}>
              <Text style={styles.semiBold14}>{strings.haventReceivedIt}</Text>
              <BaseButton onPress={() => {}}>
                <Text style={styles.bottomLinkText}>{strings.resendIt}</Text>
              </BaseButton>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScreenBg>
    </ScreenWrapper>
  );
};

export default ResetPasswordScreen;
