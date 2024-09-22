import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../../theme/responsive";
import { appRadius, appSpacings } from "../../../../theme/others";
import { appTypography } from "../../../../theme/typography";
import { appColors } from "../../../../theme/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1 / 2,
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: horizontalScale(appSpacings[8]),
    
  },
  iconContainer: {
    width: horizontalScale(38),
    height: horizontalScale(38),
    borderRadius: appRadius[4],
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.inputBgColor,
  },
  pinIcon: {
    marginTop: verticalScale(appSpacings[4]),
  },
  contentContainer: {
    flex: 1,
    rowGap: verticalScale(appSpacings[4]),
  },
  info: {
    ...appTypography.REGULAR_ITALIC.F_10,
    color: appColors.gray,
  },
});
