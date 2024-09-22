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
    borderRadius: appRadius[8],
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: horizontalScale(appSpacings[8]),
    borderWidth: 0,
    backgroundColor: appColors.inputBgColor,
  },
  inputStyle: {
    ...appTypography.SEMI_BOLD.F_14,
  },
  errorText: {
    ...appTypography.MEDIUM.F_12,
    color: appColors.danger,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: appColors.inputBgColor,
    borderRadius: appRadius[4],
    backgroundColor: appColors.white,
  },
  dropdownItem: {
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: horizontalScale(appSpacings[12]),
  },
  dropdownItemText: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.primaryText,
  },
  arrow: {
    transform: [{ rotate: "90deg" }],
  },
});
