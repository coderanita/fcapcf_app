import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";
import { horizontalScale } from "../../theme/responsive";
import { appRadius, appSpacings } from "../../theme/others";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[12]),
  },
  checkboxContainer: {
    width: horizontalScale(32),
    height: horizontalScale(32),
    borderRadius: appRadius[4],
  },
  title: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.primaryText,
  },
});
