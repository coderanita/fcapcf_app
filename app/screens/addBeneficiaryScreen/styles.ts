import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { appSpacings } from "../../theme/others";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";

export const styles = StyleSheet.create({
  paginationItemMainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(appSpacings[16]),
  },
  paginationItem: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: verticalScale(appSpacings[8]),
  },
  circle: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    borderRadius: horizontalScale(20),
    alignItems: "center",
    justifyContent: "center",
  },
  paginationIndex: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.white,
  },
  paginationTitle: {
    ...appTypography.REGULAR.F_12,
    color: appColors.secondaryBlack,
  },
  dottedLines: {
    borderRadius: 1,
    flex: 1,
    borderWidth: 1,
    borderStyle: "dashed",
    marginTop: -verticalScale(22),
    borderColor: appColors.stepInActive,
    opacity: 0.84,
  },
});
