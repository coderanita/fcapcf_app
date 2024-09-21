import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";
import { horizontalScale, verticalScale } from "../../theme/responsive";

export const styles = StyleSheet.create({
  title: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.blackTextColor,
  },
  titleContainer: {
    paddingHorizontal: horizontalScale(26),
    paddingVertical: verticalScale(27),
  },
  contentContainerStyle: {
    paddingLeft: horizontalScale(11),
    paddingRight: horizontalScale(15),
  },
});
