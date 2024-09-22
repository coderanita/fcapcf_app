import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { appRadius, appSpacings } from "../../theme/others";
import { appColors } from "../../theme/colors";
import { appTypography } from "../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    rowGap: verticalScale(appSpacings[8]),
  },
  label: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.primaryText,
  },
  inputContainer: {
    borderRadius: appRadius[8],
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: horizontalScale(appSpacings[8]),
    backgroundColor: appColors.inputBgColor,
  },
  inputStyle: {
    flex: 1,
    height: "100%",
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.primaryText,
  },
  errorText: {
    ...appTypography.MEDIUM.F_12,
    color: appColors.danger,
  },
});
