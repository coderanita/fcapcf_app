import { View, Text, Image } from "react-native";
import React from "react";
import {
  PERSONAL_INFO_SCHEMA,
  T_PERSONAL_INFO,
  T_PERSONAL_INFO_FIELDS,
} from "./types";
import { globalStyles } from "../../../../theme/globalStyles";
import { styles } from "./styles";
import { IMAGES } from "../../../../../assets/images";
import { CameraIcon, HandIcon, VideoIcon } from "../../../../../assets/icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AppButton,
  AppDropdown,
  AppInput,
  AppPhoneInput,
  BaseButton,
  DatePicker,
} from "../../../../components";
import { appStrings } from "../../../../config/appString";
import { T_DROPDOWN_ITEM } from "../../../../components/appDropdown/types";
import { horizontalScale, verticalScale } from "../../../../theme/responsive";
import { appSpacings } from "../../../../theme/others";

const PersonalInfo: React.FC<T_PERSONAL_INFO> = ({ setCurrentIndex }) => {
  const { personalInfoScreen: strings, labels, placeholders } = appStrings;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<T_PERSONAL_INFO_FIELDS>({
    mode: "onChange",
    resolver: yupResolver(PERSONAL_INFO_SCHEMA),
  });

  const genderDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "male",
      value: "Male",
    },
    {
      key: "female",
      value: "Female",
    },
  ];

  const maritalDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Single",
      value: "Single",
    },
    {
      key: "Married",
      value: "Married",
    },
  ];

  const nationalityDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Nigeria",
      value: "Nigeria",
    },
    {
      key: "Pakistan",
      value: "Pakistan",
    },
  ];

  const languageDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "English",
      value: "English",
    },
    {
      key: "Urdu",
      value: "Urdu",
    },
    {
      key: "Igbo",
      value: "Igbo",
    },
  ];

  const disabilityDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "No",
      value: "No",
    },
    {
      key: "Yes",
      value: "Yes",
    },
  ];

  const relationDropdown: T_DROPDOWN_ITEM[] = [
    {
      key: "Brother",
      value: "Brother",
    },
    {
      key: "Sister",
      value: "Sister",
    },
    {
      key: "Father",
      value: "Father",
    },
    {
      key: "Mother",
      value: "Mother",
    },
  ];

  return (
    <View style={globalStyles.flexContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={IMAGES.TAB_BG}
          resizeMode="cover"
          style={styles.avatarImage}
        />
        <CameraIcon />
      </View>
      <View
        style={[
          globalStyles.flexContainer,
          globalStyles.screenPadding,
          globalStyles.rowGap24,
        ]}
      >
        <View style={styles.bodyContainer}>
          <KeyboardAwareScrollView
            contentContainerStyle={globalStyles.rowGap24}
            showsVerticalScrollIndicator={false}
          >
            <AppInput
              label={labels.firstName}
              placeholder={placeholders.firstName}
              name="firstName"
              control={control}
              errorText={errors.firstName?.message}
            />
            <AppInput
              label={labels.middleName}
              placeholder={placeholders.middleName}
              name="middleName"
              control={control}
              errorText={errors.middleName?.message}
            />
            <AppInput
              label={labels.lastName}
              placeholder={placeholders.lastName}
              name="lastName"
              control={control}
              errorText={errors.lastName?.message}
            />
            <View style={styles.row}>
              <AppDropdown
                width={"48%"}
                label={labels.gender}
                placeholder={placeholders.gender}
                dropdownValues={genderDropdown}
                control={control}
                name="gender"
                errorText={errors.gender?.message}
              />
              <DatePicker
                width={"48%"}
                control={control}
                name="dateOfBirth"
                label={labels.dateOfBirth}
                placeholder={placeholders.dateOfBirth}
                error={errors.dateOfBirth?.message}
              />
            </View>
            <AppInput
              label={labels.address}
              placeholder={placeholders.address}
              name="address"
              control={control}
              errorText={errors.address?.message}
            />
            <AppPhoneInput
              label={labels.phone}
              placeholder={placeholders.phone}
              name="phone"
              control={control}
              errorText={errors.phone?.message}
            />
            <AppInput
              label={labels.emailLabel}
              placeholder={placeholders.emailPlaceholder}
              name="email"
              control={control}
              errorText={errors.email?.message}
            />
            <View style={styles.row}>
              <AppDropdown
                width={"48%"}
                label={labels.maritalStatus}
                placeholder={placeholders.maritalStatus}
                dropdownValues={maritalDropdown}
                control={control}
                name="maritalStatus"
                errorText={errors.maritalStatus?.message}
              />
              <AppDropdown
                width={"48%"}
                label={labels.nationality}
                placeholder={placeholders.nationality}
                dropdownValues={nationalityDropdown}
                control={control}
                name="nationality"
                errorText={errors.nationality?.message}
              />
            </View>
            <View style={styles.row}>
              <AppDropdown
                width={"48%"}
                label={labels.primaryLanguage}
                placeholder={placeholders.primaryLanguage}
                dropdownValues={languageDropdown}
                control={control}
                name="primaryLanguage"
                errorText={errors.primaryLanguage?.message}
              />
              <AppDropdown
                width={"48%"}
                label={labels.hasDisability}
                placeholder={placeholders.hasDisability}
                dropdownValues={disabilityDropdown}
                control={control}
                name="hasDisability"
                errorText={errors.hasDisability?.message}
              />
            </View>
            <AppInput
              label={labels.typeOfDisability}
              placeholder={placeholders.typeOfDisability}
              name="typeOfDisability"
              control={control}
              errorText={errors.typeOfDisability?.message}
            />
            <AppInput
              label={labels.fullName}
              placeholder={placeholders.fullName}
              name="fullName"
              control={control}
              errorText={errors.fullName?.message}
            />
            <AppPhoneInput
              label={labels.phone}
              placeholder={placeholders.phone}
              name="secondPhone"
              control={control}
              errorText={errors.secondPhone?.message}
            />
            <AppDropdown
              label={labels.relationship}
              placeholder={placeholders.relationship}
              dropdownValues={relationDropdown}
              control={control}
              name="relationship"
              errorText={errors.relationship?.message}
            />
            <View
              style={[
                styles.row,
                { columnGap: horizontalScale(appSpacings[16]) },
              ]}
            >
              <View style={styles.bottomSection}>
                <Text style={styles.label}>{labels.acquireThumb}</Text>
                <BaseButton
                  otherProps={{
                    style: styles.bottomInnerSection,
                  }}
                >
                  <HandIcon
                    width={horizontalScale(61)}
                    height={verticalScale(70)}
                  />
                </BaseButton>
              </View>
              <View style={styles.bottomSection}>
                <Text style={styles.label}>{labels.introVideo}</Text>
                <BaseButton
                  otherProps={{
                    style: styles.bottomInnerSection,
                  }}
                >
                  <VideoIcon
                    width={horizontalScale(80)}
                    height={verticalScale(56)}
                  />
                </BaseButton>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={globalStyles.hPadding16}>
        <AppButton
          title={strings.continueBtn}
          onPress={() => {
            setCurrentIndex((prev) => prev + 1);
          }}
        />
      </View>
    </View>
  );
};

export default PersonalInfo;
