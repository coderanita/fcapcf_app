import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { appRadius, appSpacings } from "../../theme/others";
import { appColors } from "../../theme/colors";
import { appTypography } from "../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    rowGap: verticalScale(appSpacings[8]),
  },
  label: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.primaryText,
  },
  inputContainer: {
    height: verticalScale(64),
    borderRadius: appRadius[4],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: horizontalScale(appSpacings[8]),
    backgroundColor: appColors.inputBgColor,
  },
  inputStyle: {
    flex: 1,
    ...appTypography.SEMI_BOLD.F_14,
  },
  errorText: {
    ...appTypography.MEDIUM.F_12,
    color: appColors.danger,
  },
});
