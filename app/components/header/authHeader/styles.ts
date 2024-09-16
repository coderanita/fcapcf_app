import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../theme/responsive";
import { appSpacings } from "../../../theme/others";
import { appTypography } from "../../../theme/typography";
import { appColors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: verticalScale(appSpacings[24]),
  },

  middleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: verticalScale(appSpacings[8]),
  },
  title: {
    ...appTypography.BOLD.F_24,
    color: appColors.untrack,
  },
  subtitle: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.extraLightGray,
  },
});
