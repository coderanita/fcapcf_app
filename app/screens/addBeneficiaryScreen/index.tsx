import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { T_BENEFICIARY_SCREEN, T_STEP_ITEM } from "./types";
import { ScreenBg, ScreenWrapper, TabHeader } from "../../components";
import { IMAGES } from "../../../assets/images";
import { globalStyles } from "../../theme/globalStyles";
import { styles } from "./styles";
import { appColors } from "../../theme/colors";
import PersonalInfo from "./subcomponents/personalInfo";
import SocialInfo from "./subcomponents/socialInfo";
import NeedsInfo from "./subcomponents/needsInfo";
import ReviewInfo from "./subcomponents/reviewInfo";

const AddBeneficiaryScreen: React.FC<T_BENEFICIARY_SCREEN> = ({
  navigation,
}) => {
  const [steps, setSteps] = useState<T_STEP_ITEM[]>([
    {
      key: "1",
      title: "Personal",
      isCompleted: false,
    },
    {
      key: "2",
      title: "Social",
      isCompleted: false,
    },
    {
      key: "3",
      title: "Needs",
      isCompleted: false,
    },
    {
      key: "4",
      title: "Submit",
      isCompleted: false,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSteps((prev) =>
      prev.map((item, index) => {
        if (index < currentIndex) {
          return {
            ...item,
            isCompleted: true,
          };
        } else if (currentIndex == 3)
          return {
            ...item,
            isCompleted: true,
          };
        else return item;
      })
    );
  }, [currentIndex]);

  const Pagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {steps.map((item, index) => (
          <>
            <View key={item.key} style={styles.paginationItem}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor: item.isCompleted
                      ? appColors.primary
                      : appColors.stepInActive,
                  },
                ]}
              >
                <Text style={styles.paginationIndex}>{index + 1}</Text>
              </View>
              <Text style={styles.paginationTitle}>{item.title}</Text>
            </View>
            {index < steps.length - 1 && <View style={styles.dottedLines} />}
          </>
        ))}
      </View>
    );
  };

  return (
    <View style={globalStyles.flexContainer}>
      <ScreenBg backgroundImage={IMAGES.TAB_BG} />
      <ScreenWrapper>
        <View style={[globalStyles.flexContainer, globalStyles.rowGap12]}>
          <TabHeader />
          <Pagination />
          {currentIndex == 0 && (
            <PersonalInfo setCurrentIndex={setCurrentIndex} />
          )}

          {currentIndex == 1 && (
            <SocialInfo setCurrentIndex={setCurrentIndex} />
          )}

          {currentIndex == 2 && <NeedsInfo setCurrentIndex={setCurrentIndex} />}
          {currentIndex == 3 && (
            <ReviewInfo setCurrentIndex={setCurrentIndex} />
          )}
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default AddBeneficiaryScreen;
