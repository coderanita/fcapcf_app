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
  AppLogo,
  BaseButton,
  ScreenBg,
  ScreenWrapper,
} from "../../components";
import { appStrings } from "../../config/appString";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMAGES } from "../../../assets/images";
import { goToForgotPasswordFromLogin } from "../../navigation/service";

const LoginScreen: React.FC<T_LOGIN_SCREEN> = ({ navigation }) => {
  const { loginScreen: strings, labels, placeholders } = appStrings;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_LOGIN_FORM>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LOGIN_FORM_VALIDATION),
  });

  const onSignInPress = () => {
    try {
      // Todo Implement Login Logic
    } catch (error) {}
  };

  return (
    <View style={globalStyles.flexContainer}>
      <ScreenBg backgroundImage={IMAGES.AUTH_BG} />
      <ScreenWrapper>
        <KeyboardAwareScrollView
          contentContainerStyle={[globalStyles.screenPadding, { flexGrow: 1 }]}
        >
          <View style={globalStyles.rowGap92}>
            {/* Header Section */}
            <View style={[globalStyles.authScreenHeader]}>
              <AppLogo />
              <Text style={globalStyles.authScreenTitle}>
                {strings.welcomeBack}
              </Text>
              <Text style={globalStyles.authScreenInfo}>
                {strings.loginToContinue}
              </Text>
            </View>

            {/* Form Container */}
            <View style={[globalStyles.rowGap20, globalStyles.vw100]}>
              <AppInput
                label={labels.emailLabel}
                placeholder={placeholders.emailPlaceholder}
                name="email"
                control={control}
                errorText={errors.email?.message}
                otherProps={{
                  keyboardType: "email-address",
                }}
              />
              <AppInput
                label={labels.passwordLabel}
                placeholder={placeholders.passwordPlaceholder}
                name="password"
                isPassword
                control={control}
                errorText={errors.password?.message}
              />
              <BaseButton
                onPress={() => {
                  goToForgotPasswordFromLogin(navigation);
                }}
                otherProps={{
                  style: styles.forgotPasswordContainer,
                }}
              >
                <Text style={styles.forgetPasswordLink}>
                  {strings.forgotPassword}
                </Text>
              </BaseButton>
              <AppCheckBox title={strings.rememberMe} />
            </View>
          </View>

          <View style={{ flex: 1 }} />
          <View style={[globalStyles.rowGap20]}>
            <AppButton
              title={strings.signInBtn}
              onPress={handleSubmit(onSignInPress)}
            />
            <BaseButton>
              <Text style={styles.footerLink1}>
                {`${strings.noNetworkLink1} `}
                <Text style={styles.footerLink2}>{strings.noNetworkLink2}</Text>
              </Text>
            </BaseButton>
          </View>
        </KeyboardAwareScrollView>
        {/* Footer Container */}
      </ScreenWrapper>
    </View>
  );
};

export default LoginScreen;
