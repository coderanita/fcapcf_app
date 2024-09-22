import { Image, Text, View } from "react-native";
import React from "react";
import { T_REVIEW_INFO } from "./types";
import { globalStyles } from "../../../../theme/globalStyles";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AppButton } from "../../../../components";
import { appStrings } from "../../../../config/appString";
import { IMAGES } from "../../../../../assets/images";
import { useNavigation } from "@react-navigation/native";

const ReviewInfo: React.FC<T_REVIEW_INFO> = ({ setCurrentIndex }) => {
  const { personalInfoScreen: strings, labels, placeholders } = appStrings;
  const navigation = useNavigation();
  return (
    <View style={globalStyles.flexContainer}>
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
            <View style={styles.topContainer}>
              <View style={styles.imgContainer}>
                <Image
                  source={IMAGES.PROJECT_COVER}
                  resizeMode="cover"
                  style={styles.imgStyle}
                />
              </View>
              <View style={[styles.topContentContainer, globalStyles.rowGap12]}>
                <View style={globalStyles.rowGap4}>
                  <Text
                    style={styles.value}
                  >{`Donald Dennis Harris (F) - 58years`}</Text>
                  <Text style={styles.label}>{`Full Name/Gender/Age`}</Text>
                </View>
                <View style={globalStyles.rowGap4}>
                  <Text
                    style={styles.value}
                  >{`123 Main Street, Garki II Abuja, Nigeria`}</Text>
                  <Text style={styles.label}>{`Address`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`09 123 456 7890`}</Text>
                <Text style={styles.label}>{`Phone`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`example@email.com`}</Text>
                <Text style={styles.label}>{`Email`}</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Single`}</Text>
                <Text style={styles.label}>{`Marital status`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Igala`}</Text>
                <Text style={styles.label}>{`Language`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Yes`}</Text>
                <Text style={styles.label}>{`Has Disability`}</Text>
              </View>
            </View>
            <View style={globalStyles.rowGap4}>
              <Text style={styles.value}>{`Deaf on the right ear`}</Text>
              <Text style={styles.label}>{`Type of Disability`}</Text>
            </View>
            <View style={styles.separator} />
            <Text
              style={styles.sectionHeading}
            >{`Emergency Contact Information`}</Text>
            <View style={styles.row2}>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Slyvester Adama`}</Text>
                <Text style={styles.label}>{`Full Name`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`09 123 456 7890`}</Text>
                <Text style={styles.label}>{`Phone`}</Text>
              </View>
            </View>
            <View style={globalStyles.rowGap4}>
              <Text style={styles.value}>{`Step Brother`}</Text>
              <Text style={styles.label}>{`Relationship`}</Text>
            </View>
            <View style={styles.separator} />
            <Text
              style={styles.sectionHeading}
            >{`Social Economic Information`}</Text>
            <View style={styles.row3}>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Farmer`}</Text>
                <Text style={styles.label}>{`Occupation`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`N6,000`}</Text>
                <Text style={styles.label}>{`Income`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`21`}</Text>
                <Text style={styles.label}>{`Household size`}</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Primary school`}</Text>
                <Text style={styles.label}>{`Education Level`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Single Parent`}</Text>
                <Text style={styles.label}>{`Vulnerability`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Rented`}</Text>
                <Text style={styles.label}>{`Housing status`}</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Financial`}</Text>
                <Text style={styles.label}>{`Assistance Required`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Educational`}</Text>
                <Text style={styles.label}>{`Previous Assistance `}</Text>
              </View>
            </View>
            <View style={styles.row2}>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Measles`}</Text>
                <Text style={styles.label}>{`Health Status`}</Text>
              </View>
              <View style={globalStyles.rowGap4}>
                <Text style={styles.value}>{`Prefer not to say`}</Text>
                <Text style={styles.label}>{`Religion`}</Text>
              </View>
            </View>
            <View style={globalStyles.rowGap4}>
              <Text style={styles.value}>{`Bead Making/Baking of Bread`}</Text>
              <Text style={styles.label}>{`Skills & training needed`}</Text>
            </View>
            <View style={globalStyles.rowGap4}>
              <Text
                style={styles.value}
              >{`T & B Global Concepts Limited`}</Text>
              <Text style={styles.label}>{`Referring organization`}</Text>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
      <View style={globalStyles.hPadding16}>
        <AppButton
          title={strings.continueBtn}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default ReviewInfo;
