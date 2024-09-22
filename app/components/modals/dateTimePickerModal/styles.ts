import { StyleSheet } from "react-native";
import { appRadius, appSpacings } from "../../../theme/others";
import { horizontalScale, verticalScale } from "../../../theme/responsive";
import { appColors } from "../../../theme/colors";
import { appTypography } from "../../../theme/typography";

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    borderRadius: appRadius[4],
    backgroundColor: appColors.white,
    rowGap: verticalScale(appSpacings[24]),
    width: "100%",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: horizontalScale(appSpacings[16]),
  },
  buttonText: {
    ...appTypography.SEMI_BOLD.F_14,
  },
});
