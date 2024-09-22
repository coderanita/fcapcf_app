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
  body: {
    flexGrow: 1,
    backgroundColor: appColors.white,
    borderRadius: appRadius[4],
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(32),
  },
  uploadContainer: {
    width: horizontalScale(94),
    height: horizontalScale(94),
    borderRadius: appRadius[4],
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: appColors.lightSeparatorColor,
  },
  section: {
    rowGap: verticalScale(appSpacings[12]),
  },
  sectionTitle: {
    ...appTypography.REGULAR.F_14,
    color: appColors.menuColor,
    marginTop: verticalScale(appSpacings[32]),
    marginBottom: verticalScale(appSpacings[20]),
  },
  columnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(appSpacings[16]),
  },
});
