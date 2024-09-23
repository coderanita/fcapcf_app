import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import {
  MY_ACCOUNT_FORM_VALIDATION,
  T_MY_ACCOUNT_FORM,
  T_MY_ACCOUNT_SCREEN,
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
import { CameraIcon } from "../../../assets/icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const MyAccountScreen: React.FC<T_MY_ACCOUNT_SCREEN> = ({ navigation }) => {
  const { myAccountScreen: strings, labels, placeholders } = appStrings;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_MY_ACCOUNT_FORM>({
    mode: "onChange",
    defaultValues: {
      email: "",
      fullName: "",
    },
    resolver: yupResolver(MY_ACCOUNT_FORM_VALIDATION),
  });

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
            <View style={globalStyles.flexContainer}>
              <View style={[styles.body]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={globalStyles.rowGap32}
                >
                  <View style={styles.avatarContainer}>
                    <Image
                      source={IMAGES.TAB_BG}
                      resizeMode="cover"
                      style={styles.avatarImage}
                    />
                    <CameraIcon />
                  </View>
                  <AppInput
                    control={control}
                    name="fullName"
                    label={labels.fullName}
                    placeholder={placeholders.fullName}
                    errorText={errors.fullName?.message}
                  />
                  <AppInput
                    control={control}
                    name="email"
                    label={labels.emailLabel}
                    placeholder={placeholders.emailPlaceholder}
                    errorText={errors.email?.message}
                  />
                </ScrollView>
              </View>
            </View>
            <AppButton
              title={strings.updateBtn}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default MyAccountScreen;
