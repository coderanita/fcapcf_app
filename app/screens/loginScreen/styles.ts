import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";

export const styles = StyleSheet.create({
  forgotPasswordContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
  forgetPasswordLink: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.primaryText,
  },
  footerLink1: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.black,
    textAlign: "center",
  },
  footerLink2: {
    ...appTypography.BOLD.F_16,
    color: appColors.primary,
    textAlign: "center",
  },
});
