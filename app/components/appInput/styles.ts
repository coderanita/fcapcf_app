import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { appRadius, appSpacings } from "../../theme/others";
import { appColors } from "../../theme/colors";
import { appTypography } from "../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    rowGap: verticalScale(appSpacings[16]),
  },
  label: {
    ...appTypography.REGULAR.F_12,
    color: appColors.black,
  },
  inputContainer: {
    height: verticalScale(64),
    borderRadius: appRadius[8],
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    ...appTypography.SEMI_BOLD.F_12,
    color: appColors.lightGray,
    paddingHorizontal: horizontalScale(20),
  },
  inputError: {
    ...appTypography.REGULAR.F_12,
  },
});
