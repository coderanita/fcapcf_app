import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../../theme/responsive";
import { appRadius, appSpacings } from "../../../../theme/others";
import { appTypography } from "../../../../theme/typography";
import { appColors } from "../../../../theme/colors";

export const styles = StyleSheet.create({
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
    backgroundColor: appColors.primary
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
  time: {
    ...appTypography.SEMI_BOLD.F_12,
    color: appColors.placeholderColor,
  },
});
