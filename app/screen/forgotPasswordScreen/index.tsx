import { View, Text } from "react-native";
import React from "react";
import {
  FORGOT_PASSWORD_FORM_VALIDATION,
  T_FORGOT_PASSWORD_FORM,
  T_FORGOT_PASSWORD_SCREEN,
} from "./type";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { appColors } from "../../theme/colors";
import { string } from "yup";
import { goToResetPasswordScreenFromForgotPasswordScreen } from "../../navigation/service";

const ForgotPasswordScreen: React.FC<T_FORGOT_PASSWORD_SCREEN> = ({
  navigation,
}) => {
  const {
    forgotPasswordScreen: strings,
    labels,
    placeHolder,
    commonText,
  } = appStrings;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_FORGOT_PASSWORD_FORM>({
    mode: "onChange",
    defaultValues: {
      email: "Hasseb@gmail.com",
    },
    resolver: yupResolver(FORGOT_PASSWORD_FORM_VALIDATION),
  });
  const onForgotPasswordPress = () => {
    goToResetPasswordScreenFromForgotPasswordScreen(navigation);
  };
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
              inputName={"email"}
              control={control}
              label={labels.emailLabel}
              placeholder={placeHolder.provideYourEmailOrUsernmae}
              errorText={errors.email?.message}
            />
          </View>
          <View style={globalStyles.flexContainer} />
          <View style={styles.bottomContainer}>
            <AppButton
              title={strings.forgotPassword}
              onPress={handleSubmit(onForgotPasswordPress)}
            />
            <View style={styles.linkTextContainer}>
              <Text style={styles.semiBold14}>
                {strings.suddenlyRememberIt}
              </Text>
              <BaseButton onPress={() => {}}>
                <Text style={styles.bottomLinkText}>{strings.login}</Text>
              </BaseButton>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScreenBg>
    </ScreenWrapper>
  );
};

export default ForgotPasswordScreen;
