import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";
import { horizontalScale } from "../../theme/responsive";
import { appSpacings } from "../../theme/others";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[12]),
  },
  title: {
    ...appTypography.SEMI_BOLD.F_12,
    color: appColors.darkGray,
  },
});
