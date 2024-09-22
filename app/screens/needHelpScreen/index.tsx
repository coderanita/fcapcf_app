import { View, Text, ScrollView } from "react-native";
import React from "react";
import { T_NEED_HELP_SCREEN } from "./types";
import { globalStyles } from "../../theme/globalStyles";
import {
  Accordion,
  AppButton,
  BaseButton,
  ScreenBg,
  ScreenWrapper,
  TabHeader,
} from "../../components";
import { IMAGES } from "../../../assets/images";
import { appStrings } from "../../config/appString";
import { styles } from "./styles";
import { appColors } from "../../theme/colors";
import {
  gotoContactSupportFromNeedHelp,
  gotoCreateFAQFromNeedHelp,
} from "../../navigation/service";

const NeedHelpScreen: React.FC<T_NEED_HELP_SCREEN> = ({ navigation }) => {
  const { needHelpScreen: strings } = appStrings;

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
            <View style={globalStyles.authScreenHeader}>
              <Text style={globalStyles.authScreenTitle}>{strings.title}</Text>
              <Text style={globalStyles.authScreenInfo}>{strings.info}</Text>
            </View>
            <View style={globalStyles.flexContainer}>
              <View style={[styles.body]}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={globalStyles.rowGap32}
                >
                  <View style={globalStyles.rowGap16}>
                    <Accordion
                      heading={strings.question1}
                      content="Mollit nulla mollit ut ea duis eu aliquip. Dolore consectetur deserunt quis ullamco pariatur duis ea fugiat qui Lorem irure duis duis. Do aliqua ea veniam anim ullamco amet laborum laborum. Ipsum in est cupidatat consequat commodo aliqua tempor nostrud. Nisi aute elit ea nulla dolor labore id proident irure. Esse duis eu commodo mollit nulla fugiat irure veniam."
                    />
                    <Accordion
                      heading={strings.question2}
                      content="Mollit nulla mollit ut ea duis eu aliquip. Dolore consectetur deserunt quis ullamco pariatur duis ea fugiat qui Lorem irure duis duis. Do aliqua ea veniam anim ullamco amet laborum laborum. Ipsum in est cupidatat consequat commodo aliqua tempor nostrud. Nisi aute elit ea nulla dolor labore id proident irure. Esse duis eu commodo mollit nulla fugiat irure veniam."
                    />
                    <Accordion
                      heading={strings.question3}
                      content="Mollit nulla mollit ut ea duis eu aliquip. Dolore consectetur deserunt quis ullamco pariatur duis ea fugiat qui Lorem irure duis duis. Do aliqua ea veniam anim ullamco amet laborum laborum. Ipsum in est cupidatat consequat commodo aliqua tempor nostrud. Nisi aute elit ea nulla dolor labore id proident irure. Esse duis eu commodo mollit nulla fugiat irure veniam."
                    />
                  </View>
                  <View style={[styles.bottomContainer, globalStyles.rowGap8]}>
                    <BaseButton
                      onPress={() => {
                        gotoContactSupportFromNeedHelp(navigation);
                      }}
                    >
                      <Text
                        style={[
                          styles.bottomLink,
                          { color: appColors.primary },
                        ]}
                      >
                        {strings.link1}
                      </Text>
                    </BaseButton>
                    <BaseButton
                      onPress={() => {
                        gotoCreateFAQFromNeedHelp(navigation);
                      }}
                    >
                      <Text
                        style={[
                          styles.bottomLink,
                          {
                            color: appColors.danger,
                            textDecorationLine: "underline",
                          },
                        ]}
                      >
                        {strings.link2}
                      </Text>
                    </BaseButton>
                  </View>
                </ScrollView>
              </View>
            </View>
            <AppButton
              title={strings.backBtn}
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

export default NeedHelpScreen;
