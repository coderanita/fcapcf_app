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
  },

  middleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: verticalScale(appSpacings[16]),
  },
  title: {
    ...appTypography.SEMI_BOLD.F_24,
    color: appColors.untrack,
  },
  subtitle: {
    ...appTypography.MEDIUM.F_16,
  },
});
