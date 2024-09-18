import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../theme/responsive";
import { appRadius, appSpacings } from "../../../theme/others";
import { appTypography } from "../../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(64),
    paddingHorizontal: horizontalScale(appSpacings[16]),
    borderRadius: appRadius[8],
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    ...appTypography.SEMI_BOLD.F_20,
    textAlign: "center",
  },
});
