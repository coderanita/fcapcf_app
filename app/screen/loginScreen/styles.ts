import { StyleSheet } from "react-native";
import { verticalScale } from "../../theme/responsive";
import { appSpacings } from "../../theme/others";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    rowGap: verticalScale(46),
  },
  topContainer: {
    rowGap: verticalScale(appSpacings[32]),
  },
  bottomContainer: {
    rowGap: verticalScale(appSpacings[24]),
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    alignItems: "flex-end",
  },
  forgetPasswordLink: {
    ...appTypography.SEMI_BOLD.F_12,
    color: appColors.blue,
  },
  signupLink1: {
    ...appTypography.REGULAR.F_14,
    color: appColors.black,
  },
  signupLink2: {
    ...appTypography.MEDIUM.F_14,
    color: appColors.blue,
  },
});
