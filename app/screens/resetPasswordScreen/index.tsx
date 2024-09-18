import { View, Text } from "react-native";
import React from "react";
import {
  T_RESET_PASSWORD_SCREEN,
  RESET_PASSWORD_FORM_VALIDATION,
  T_RESET_PASSWORD_FORM,
} from "./types";
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

const ResetPasswordScreen: React.FC<T_RESET_PASSWORD_SCREEN> = ({
  navigation,
}) => {
  const { resetPasswordScreen: strings, labels, placeholders } = appStrings;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_RESET_PASSWORD_FORM>({
    mode: "onChange",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    resolver: yupResolver(RESET_PASSWORD_FORM_VALIDATION),
  });

  const onSetBtnPress = () => {
    try {
      // Todo Implement Set Password Logic
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
                label={labels.newPassword}
                placeholder={placeholders.enterNewPassword}
                name="newPassword"
                control={control}
                errorText={errors.newPassword?.message}
                isPassword
              />
              <AppInput
                label={labels.confirmPassword}
                placeholder={placeholders.confirmNewPassword}
                name="confirmPassword"
                isPassword
                control={control}
                errorText={errors.confirmPassword?.message}
              />
            </View>
          </View>

          <View style={{ flex: 1 }} />
          <View style={[globalStyles.rowGap20]}>
            <AppButton
              title={strings.setBtn}
              onPress={handleSubmit(onSetBtnPress)}
            />
            <BaseButton>
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

export default ResetPasswordScreen;
