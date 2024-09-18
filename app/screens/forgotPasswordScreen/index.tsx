import { View, Text } from "react-native";
import React from "react";
import {
  FORGOT_PASSWORD_FORM_VALIDATION,
  T_FORGOT_PASSWORD_FORM,
  T_FORGOT_PASSWORD_SCREEN,
} from "./types";
import { globalStyles } from "../../theme/globalStyles";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  AppButton,
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
import { goToResetPasswordFromForgotPassword } from "../../navigation/service";

const ForgotPasswordScreen: React.FC<T_FORGOT_PASSWORD_SCREEN> = ({
  navigation,
}) => {
  const { forgotPasswordScreen: strings, labels, placeholders } = appStrings;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_FORGOT_PASSWORD_FORM>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(FORGOT_PASSWORD_FORM_VALIDATION),
  });

  const onResetPasswordPress = () => {
    try {
      // Todo Implement Login Logic
      goToResetPasswordFromForgotPassword(navigation);
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
              <Text style={globalStyles.authScreenTitle}>{strings.title}</Text>
              <Text style={globalStyles.authScreenInfo}>{strings.info}</Text>
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
            </View>
          </View>

          <View style={{ flex: 1 }} />
          <View style={[globalStyles.rowGap20]}>
            <AppButton
              title={strings.resetBtn}
              onPress={handleSubmit(onResetPasswordPress)}
            />
            <BaseButton
              onPress={() => {
                if (navigation.canGoBack()) navigation.goBack();
              }}
            >
              <Text style={styles.footerLink1}>
                {`${strings.footerLink1} `}
                <Text style={styles.footerLink2}>{strings.footerLink2}</Text>
              </Text>
            </BaseButton>
          </View>
        </KeyboardAwareScrollView>
        {/* Footer Container */}
      </ScreenWrapper>
    </View>
  );
};

export default ForgotPasswordScreen;
