import { StyleSheet } from "react-native";
import { appColors } from "../../theme/colors";
import { verticalScale } from "../../theme/responsive";
import { appSpacings } from "../../theme/others";
import { appTypography } from "../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(96),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColors.white,
  },
  tabContainer: {
    height: "100%",
    flex: 1 / 4,
    alignItems: "center",
    justifyContent: "center",
    rowGap: verticalScale(appSpacings[8]),
  },
  tabLabelStyle: {
    ...appTypography.LIGHT.F_12,
  },
  indicator: {
    width: "50%",
    height: 2,
    backgroundColor: appColors.primary,
    position: "absolute",
    top: 0,
  },
});
