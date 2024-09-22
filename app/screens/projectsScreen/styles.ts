import { StyleSheet } from "react-native";
import { appTypography } from "../../theme/typography";
import { appColors } from "../../theme/colors";
import { horizontalScale, verticalScale } from "../../theme/responsive";
import { appRadius, appSpacings } from "../../theme/others";

export const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    backgroundColor: appColors.white,
    borderRadius: appRadius[4],
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(32),
    rowGap: verticalScale(appSpacings[24]),
  },
  scrollContainer: {
    marginBottom: verticalScale(appSpacings[24]),
  },
  topBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: appColors.danger,
    paddingHorizontal: horizontalScale(appSpacings[16]),
    paddingVertical: verticalScale(appSpacings[12]),
    borderRadius: appRadius[4],
  },
  offlineData: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.white,
  },
  uploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    columnGap: horizontalScale(appSpacings[8]),
  },
  clickToUpload: {
    ...appTypography.REGULAR.F_16,
    color: appColors.white,
  },
  projectCoverContainer: {
    width: "100%",
    height: verticalScale(240),
    overflow: "hidden",
    borderRadius: appRadius[20],
  },
  projectCover: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[8]),
  },
  infoTitle: {
    ...appTypography.REGULAR.F_12,
    color: appColors.infoColor,
  },
  beneficiariesContainer: {
    flexDirection: "row",
    borderRadius: appRadius[4],
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.yellow,
    paddingHorizontal: horizontalScale(appSpacings[8]),
    paddingVertical: verticalScale(appSpacings[4]),
  },
  programTitle: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.secondaryBlack,
  },
  programInfo: {
    ...appTypography.REGULAR.F_12,
    color: appColors.infoColor,
  },
  memberItemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: horizontalScale(appSpacings[12]),
  },
  memberItemAvatar: {
    width: horizontalScale(32),
    height: horizontalScale(32),
    borderRadius: horizontalScale(32),
    alignItems: "center",
    justifyContent: "center",
  },
  memberItemAvatarText: {
    ...appTypography.REGULAR.F_12,
    color: appColors.white,
  },
  memberRightContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  memberRightContent: {
    rowGap: verticalScale(appSpacings[4]),
  },
  memberName: {
    ...appTypography.REGULAR.F_12,
    color: appColors.infoColor,
  },
  member: {
    ...appTypography.REGULAR_ITALIC.F_12,
    color: appColors.infoColor,
  },
  memberRemoveBtn: {
    ...appTypography.BOLD_ITALIC.F_12,
    color: appColors.primary,
  },
});
