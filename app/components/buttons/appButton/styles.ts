import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../theme/responsive";
import { appRadius, appSpacings } from "../../../theme/others";
import { appTypography } from "../../../theme/typography";
import { appColors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(64),
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: verticalScale(appSpacings[12]),
    borderRadius: appRadius[8],
    flexDirection: "row",
    columnGap: horizontalScale(appSpacings[8]),
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    borderWidth: 1.04,
    borderColor: appColors.blue,
  },

  buttonTitle: {
    ...appTypography.SEMI_BOLD.F_20,
    textAlign: "center",
  },
  buttonTitle2: {
    ...appTypography.MEDIUM.F_14,
    textAlign: "center",
  },
});
