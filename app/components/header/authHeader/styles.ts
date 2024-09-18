import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../theme/responsive";
import { appSpacings } from "../../../theme/others";
import { appTypography } from "../../../theme/typography";
import { appColors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  middleContainer: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: verticalScale(appSpacings[16]),
  },
  title: {
    ...appTypography.SEMI_BOLD.F_24,
    color: appColors.untrack,
    textAlign: "center",
  },
  subtitle: {
    ...appTypography.MEDIUM.F_14,
    textAlign: "center",
    width: horizontalScale(300),
  },
});
