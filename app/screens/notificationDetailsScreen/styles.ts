import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";
import { appRadius, appSpacings } from "../../theme/others";
import { horizontalScale, verticalScale } from "../../theme/responsive";

export const styles = StyleSheet.create({
  username: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.secondaryBlack,
  },
  body: {
    flexGrow: 1,
    backgroundColor: appColors.white,
    borderRadius: appRadius[4],
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(32),
    marginBottom: verticalScale(appSpacings[32]),
  },
  scrollContainer: {
    marginBottom: verticalScale(appSpacings[16]),
  },
  scrollContentContainer: {
    paddingBottom: verticalScale(100),
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: horizontalScale(appSpacings[12]),
  },
  leftContainer: {
    width: horizontalScale(32),
    height: horizontalScale(32),
    borderRadius: appRadius[4],
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.primary,
  },
  leftText: {
    ...appTypography.SEMI_BOLD.F_18,
    color: appColors.white,
  },
  rightContainer: {
    flex: 1,
    rowGap: verticalScale(appSpacings[8]),
  },
  title: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.placeholderColor,
  },
  info: {
    ...appTypography.REGULAR.F_12,
    color: appColors.placeholderColor,
  },
  backBtn: {
    ...appTypography.BOLD.F_12,
    color: appColors.placeholderColor,
  },
});
