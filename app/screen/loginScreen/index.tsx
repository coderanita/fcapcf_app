import { View } from "react-native";
import React from "react";
import { LOGIN_FORM_VALIDATION, T_LOGIN_FORM, T_LOGIN_SCREEN } from "./types";
import { globalStyles } from "../../theme/globalStyles";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ScreenWrapper from "../../screenWrapper";
import { AppButton, AppInput, AuthHeader, BaseButton } from "../../components";
import { appStrings } from "../../config/appString";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginScreen: React.FC<T_LOGIN_SCREEN> = () => {
  const { loginScreen: strings, labels, placeHolder } = appStrings;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_LOGIN_FORM>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(LOGIN_FORM_VALIDATION),
  });
  return (
    <ScreenWrapper>
      <AuthHeader title={strings.title} subtitle={strings.subTitle} />
      <KeyboardAwareScrollView
        contentContainerStyle={[
          globalStyles.authScreenPadding,
          styles.mainContainer,
        ]}
      >
        <View style={styles.topContainer}>
          <View style={[globalStyles.rowGap16, styles.formContainer]}>
            <AppInput
              inputName={"email"}
              control={control}
              label={labels.emailLabel}
              placeholder={placeHolder.emailPlaceholder}
              errorText={errors.email?.message}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <AppButton title={strings.sign} />
        </View>
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default LoginScreen;
