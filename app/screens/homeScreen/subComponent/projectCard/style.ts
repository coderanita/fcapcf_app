import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../theme/responsive";
import { appColors } from "../../../../theme/colors";
import { appTypography } from "../../../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: appColors.white,
    flexDirection: "row",
    columnGap: horizontalScale(13),
  },
  leftContainer: {},
  rightContainer: {
    flex: 1,
    rowGap: verticalScale(8),
  },
  imageStyle: {
    width: horizontalScale(134),
    height: verticalScale(101),
    borderRadius: moderateScale(4),
  },
  projectTitleTxt: {
    ...appTypography.SEMI_BOLD.F_12,
    color: appColors.blackTextColor,
  },
  viewMoreTxt: {
    ...appTypography.REGULAR.F_10,
    color: appColors.primary,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  descriptionContainer: {},
  descriptionTxt: {
    ...appTypography.REGULAR.F_10,
    color: appColors.greyTextColor,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: horizontalScale(10),
  },
  dateTxt: {
    ...appTypography.REGULAR.F_10,
    color: appColors.greyTextColor,
  },
  dateContainer: {
    columnGap: horizontalScale(5),
    alignItems: "center",
    flexDirection: "row",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: horizontalScale(14.25),
    height: verticalScale(14.25),
    borderRadius: moderateScale(7.125),
    alignItems: "center",
    marginLeft: moderateScale(-3),
    justifyContent: "center",
  },
  statusTxt: {
    ...appTypography.REGULAR.F_05,
    color: appColors.white,
  },
  locationContainer: {
    flexDirection: "row",
    columnGap: horizontalScale(5),
  },
  locationTxt: {
    ...appTypography.REGULAR.F_10,
    color: appColors.greyTextColor,
  },
});
