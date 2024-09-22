import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../theme/responsive";
import { appRadius, appSpacings } from "../../../../theme/others";
import { appColors } from "../../../../theme/colors";
import { appTypography } from "../../../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: horizontalScale(appSpacings[8]),
    paddingVertical: verticalScale(appSpacings[8]),
    borderRadius: appRadius[4],
    backgroundColor: appColors.white,
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[8]),
  },
  leftContainer: {
    width: horizontalScale(134),
    height: verticalScale(100),
    borderRadius: appRadius[4],
    overflow: "hidden",
  },
  projectImg: {
    width: "100%",
    height: "100%",
  },
  rightContainer: {
    flex: 1,
    rowGap: verticalScale(appSpacings[12]),
  },
  rightTopContainer: {
    width: "100%",
    rowGap: verticalScale(appSpacings[8]),
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[8]),
  },
  title: {
    flex: 1,
    ...appTypography.SEMI_BOLD.F_12,
    color: appColors.secondaryBlack,
  },
  info: {
    ...appTypography.REGULAR.F_10,
    color: appColors.infoColor,
  },
  viewmore: {
    ...appTypography.REGULAR.F_10,
    color: appColors.primary,
  },
  rightBottomContainer: {
    width: "100%",
    rowGap: verticalScale(appSpacings[8]),
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: appColors.borderColor,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: horizontalScale(appSpacings[24]),
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[4]),
  },
  date: {
    ...appTypography.REGULAR.F_10,
    color: appColors.infoColor,
  },
  avatars: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  mainAvatar: {
    width: horizontalScale(16),
    height: horizontalScale(16),
    borderRadius: horizontalScale(16),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  avatar1: {
    left: horizontalScale(0),
  },
  avatar2: {
    position: "absolute",
    left: horizontalScale(12),
  },
  avatar3: {
    position: "absolute",
    left: horizontalScale(24),
  },
  avatarText: {
    fontSize: moderateScale(5),
    fontWeight: "400",
    color: appColors.white,
  },
});
