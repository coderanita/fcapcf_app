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
    rowGap: verticalScale(appSpacings[48]),
  },
  bottomContainer: {
    rowGap: verticalScale(appSpacings[28]),
    paddingVertical: verticalScale(appSpacings[48]),
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    alignItems: "flex-end",
  },

  signupLink1: {
    ...appTypography.REGULAR.F_14,
    color: appColors.black,
  },
  signupLink2: {
    ...appTypography.MEDIUM.F_14,
    color: appColors.blue,
  },
  semiBold14: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.darkGray,
  },
  forgetPasswordLink: {
    alignItems: "flex-end",
  },
  linkTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLinkText: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.green,
  },
});
