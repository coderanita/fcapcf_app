import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { appRadius, appSpacings } from "../../theme/others";
import { appColors } from "../../theme/colors";
import { appTypography } from "../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    overflow: "hidden",
  },
  headerContainer: {
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: verticalScale(appSpacings[16]),
    borderRadius: appRadius[4],
    backgroundColor: appColors.accordionBgColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: horizontalScale(appSpacings[12]),
  },
  heading: {
    flex: 1,
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.placeholderColor,
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: verticalScale(appSpacings[12]),
    marginTop: verticalScale(appSpacings[12]),
    borderRadius: appRadius[4],
    borderWidth: 1,
    borderColor: appColors.inputBgColor,
    position: "absolute",
    top: 0,
    width: "100%",
  },
  content: {
    ...appTypography.REGULAR.F_14,
    color: appColors.placeholderColor,
  },
});
