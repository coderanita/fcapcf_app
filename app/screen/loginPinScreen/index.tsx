import { View, Text } from "react-native";
import React from "react";
import {
  LOGIN_PIN_FORM_VALIDATION,
  T_LOGIN_PIN_FORM,
  T_LOGIN_PIN_SCREEN,
} from "./type";
import {
  AppButton,
  AppCheckBox,
  AppInput,
  AuthHeader,
  BaseButton,
  ScreenBg,
  ScreenWrapper,
} from "../../components";
import { appStrings } from "../../config/appString";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles } from "../../theme/globalStyles";
import { styles } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { goToForgotPasswordScreenFromLoginPinScreen } from "../../navigation/service";

const LoginPinScreen: React.FC<T_LOGIN_PIN_SCREEN> = ({ navigation }) => {
  const {
    loginPinScreen: strings,
    labels,
    placeHolder,
    commonText,
  } = appStrings;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_LOGIN_PIN_FORM>({
    mode: "onChange",
    defaultValues: {
      email: "Hasseb@gmail.com",
      pin: "1234",
    },
    resolver: yupResolver(LOGIN_PIN_FORM_VALIDATION),
  });
  const onSignInPress = () => {
    goToForgotPasswordScreenFromLoginPinScreen(navigation);
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
          <AuthHeader title={strings.title} subtitle={strings.subTitle} />
          <View style={styles.topContainer}>
            <AppInput
              inputName={"email"}
              control={control}
              label={labels.emailLabel}
              placeholder={placeHolder.emailPlaceholder}
              errorText={errors.email?.message}
            />
            <View style={globalStyles.rowGap4}>
              <AppInput
                inputName={"pin"}
                control={control}
                label={labels.pin}
                placeholder={placeHolder.passwordPlaceholder}
                errorText={errors.pin?.message}
                numbKeyBoardType
                hidePassword={true}
              />
              <BaseButton
                onPress={() => {}}
                otherProps={{ style: styles.forgetPasswordLink }}
              >
                <Text style={styles.semiBold14}>{strings.forgotPin}</Text>
              </BaseButton>
              <AppCheckBox title={labels.rememberMe} />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <AppButton
              title={strings.sign}
              onPress={handleSubmit(onSignInPress)}
            />
            <View style={styles.linkTextContainer}>
              <Text style={styles.semiBold14}>{commonText.noNetwork}</Text>
              <BaseButton
                onPress={() => {}}
                otherProps={{ style: styles.forgetPasswordLink }}
              >
                <Text style={styles.bottomLinkText}>
                  {commonText.useAppOffline}
                </Text>
              </BaseButton>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScreenBg>
    </ScreenWrapper>
  );
};

export default LoginPinScreen;
