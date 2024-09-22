import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../../theme/responsive";
import { appRadius, appSpacings } from "../../../../theme/others";
import { appColors } from "../../../../theme/colors";
import { appTypography } from "../../../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: verticalScale(284),
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: verticalScale(284),
  },
  overlay: {
    width: "100%",
    height: verticalScale(284),
    paddingHorizontal: horizontalScale(appSpacings[20]),
    backgroundColor: "rgba(72,202,50,0.78)",
    alignItems: "center",
    justifyContent: "center",
    rowGap: verticalScale(appSpacings[32]),
  },
  topContainer: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[12]),
  },
  avatarContainer: {
    width: horizontalScale(52),
    height: horizontalScale(52),
    borderRadius: appRadius[4],
    backgroundColor: appColors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    ...appTypography.SEMI_BOLD.F_24,
    color: appColors.black,
  },
  goodMorning: {
    ...appTypography.REGULAR.F_14,
    color: appColors.white,
  },
  userType: {
    ...appTypography.BOLD_ITALIC.F_14,
    color: appColors.white,
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: appColors.lightSeparatorColor,
  },
  bottomContainer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContainerSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  value: {
    ...appTypography.BOLD.F_24,
    color: appColors.white,
  },
  label: {
    ...appTypography.REGULAR.F_12,
    color: appColors.white,
  },
});
