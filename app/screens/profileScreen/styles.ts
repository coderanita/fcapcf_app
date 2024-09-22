import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";
import { appRadius, appSpacings } from "../../theme/others";
import { horizontalScale, verticalScale } from "../../theme/responsive";

export const styles = StyleSheet.create({
  username: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.secondaryBlack,
  },
  menuContainer: {
    flexGrow: 1,
    backgroundColor: appColors.white,
    borderRadius: appRadius[4],
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(32),
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: horizontalScale(appSpacings[12]),
    marginBottom: verticalScale(appSpacings[24]),
  },
  iconContainer: {
    width: horizontalScale(42),
    height: horizontalScale(42),
    borderRadius: appRadius[4],
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.inputBgColor,
  },
  itemContentContainer: {
    flex: 1,
    rowGap: verticalScale(appSpacings[28]),
  },
  itemTitle: {
    ...appTypography.REGULAR.F_14,
    color: appColors.menuColor,
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: appColors.borderColor2,
  },
});