import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import { IMAGES } from "../../../../../assets/images";
import { BaseButton } from "react-native-gesture-handler";
import { AppSepartor } from "../../../../components";
import { CalenderIcon, LocationIcon } from "../../../../../assets/icons";
import { appColors } from "../../../../theme/colors";
import { globalStyles } from "../../../../theme/globalStyles";
import { horizontalScale } from "../../../../theme/responsive";
import { T_PROJECT_CARD } from "./type";

const ProjectCard: React.FC<T_PROJECT_CARD> = ({
  projectCardImg = IMAGES.PROJECT_IMG2,
}) => {
  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.leftContainer}> */}
      <Image source={projectCardImg} style={styles.imageStyle} />
      {/* </View> */}
      <View style={styles.rightContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.projectTitleTxt}>{"Project Title"}</Text>
          <BaseButton>
            <Text style={styles.viewMoreTxt}>{"view more"}</Text>
          </BaseButton>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTxt} numberOfLines={3}>
            {
              "Maecenas condimentum elit tortor, maximus odio dignissim eget. Suspendisse potenti. Phasellus elit erat, tincidunt non..."
            }
          </Text>
        </View>
        <AppSepartor />
        <View style={styles.bottomContainer}>
          <View style={styles.dateContainer}>
            <CalenderIcon
              fill={appColors.secondaryText}
              width={horizontalScale(9)}
              height={horizontalScale(10)}
            />
            <Text style={styles.dateTxt}>{"5 Aug, 2024"}</Text>
          </View>
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.circle,
                { backgroundColor: appColors.statusColor1 },
              ]}
            >
              <Text style={styles.statusTxt}>{"AP"}</Text>
            </View>
            <View
              style={[
                styles.circle,
                { backgroundColor: appColors.statusColor2 },
              ]}
            >
              <Text style={styles.statusTxt}>{"EA"}</Text>
            </View>
            <View
              style={[
                styles.circle,
                { backgroundColor: appColors.statusColor3 },
              ]}
            >
              <Text style={styles.statusTxt}>{"TB"}</Text>
            </View>
          </View>
          <View
            style={[styles.locationContainer, globalStyles.hvFlexColCenter]}
          >
            <LocationIcon
              fill={appColors.iconColor}
              width={horizontalScale(7)}
              height={horizontalScale(10)}
            />
            <Text style={styles.locationTxt}>{"NW - Nigeria"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProjectCard;
