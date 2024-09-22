import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";
import { appRadius } from "../../theme/others";
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
  },
});
