import { StyleSheet } from "react-native";
import { verticalScale } from "../../theme/responsive";
import { appSpacings } from "../../theme/others";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    rowGap: verticalScale(appSpacings[48]),
  },
  topContainer: {
    rowGap: verticalScale(appSpacings[48]),
    paddingTop: verticalScale(appSpacings[28]),
  },
  semiBold14: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.darkGray,
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
  bottomContainer: {
    rowGap: verticalScale(appSpacings[20]),
    paddingVertical: verticalScale(appSpacings[32] * 2),
    alignItems: "center",
    justifyContent: "center",
  },
});
