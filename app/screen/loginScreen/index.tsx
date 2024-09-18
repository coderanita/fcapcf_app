import { View, Text } from "react-native";
import React from "react";
import { LOGIN_FORM_VALIDATION, T_LOGIN_FORM, T_LOGIN_SCREEN } from "./types";
import { globalStyles } from "../../theme/globalStyles";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { goToLoginPinScreenFromLoginScreen } from "../../navigation/service";

const LoginScreen: React.FC<T_LOGIN_SCREEN> = ({ navigation }) => {
  const { loginScreen: strings, labels, placeHolder, commonText } = appStrings;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_LOGIN_FORM>({
    mode: "onChange",
    defaultValues: {
      email: "Hasseb@gmail.com",
      password: "JustDoIt@321",
    },
    resolver: yupResolver(LOGIN_FORM_VALIDATION),
  });
  const onSignInPress = () => {
    goToLoginPinScreenFromLoginScreen(navigation);
  };
  return (
    <ScreenWrapper>
      <ScreenBg backgroundImage={require("../../../assets/imageAuth1.png")}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
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
            <View style={globalStyles.rowGap8}>
              <AppInput
                inputName={"password"}
                control={control}
                label={labels.passwordLabel}
                placeholder={placeHolder.passwordPlaceholder}
                errorText={errors.password?.message}
              />
              <BaseButton
                onPress={() => {}}
                otherProps={{ style: styles.forgetPasswordLink }}
              >
                <Text style={styles.semiBold14}>{strings.forgotPassword}</Text>
              </BaseButton>
              <AppCheckBox title={labels.rememberMe} />
            </View>
          </View>
          <View style={globalStyles.flexContainer} />
          <View style={styles.bottomContainer}>
            <AppButton
              title={strings.sign}
              onPress={handleSubmit(onSignInPress)}
            />
            <View style={styles.linkTextContainer}>
              <Text style={styles.semiBold14}>{commonText.noNetwork}</Text>
              <BaseButton onPress={() => {}}>
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

export default LoginScreen;
