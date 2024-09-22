import { StyleSheet } from "react-native";
import { appColors } from "../../../../theme/colors";
import { appRadius, appSpacings } from "../../../../theme/others";
import { horizontalScale, verticalScale } from "../../../../theme/responsive";
import { appTypography } from "../../../../theme/typography";

export const styles = StyleSheet.create({
  bodyContainer: {
    flexGrow: 1,
    backgroundColor: appColors.white,
    borderRadius: appRadius[4],
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(32),
  },
  label: {
    ...appTypography.REGULAR_ITALIC.F_12,
    color: "rgba(124, 122, 122, 0.4)",
  },
  value: {
    ...appTypography.REGULAR.F_14,
    color: appColors.menuColor,
  },
  sectionHeading: {
    ...appTypography.SEMI_BOLD.F_14,
    color: appColors.secondaryBlack,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: appColors.borderColor3,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[12]),
  },
  imgContainer: {
    width: horizontalScale(86),
    height: horizontalScale(86),
    borderRadius: appRadius[4],
    overflow: "hidden",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
  },
  topContentContainer: {
    flex: 1,
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[20]),
  },
  row3: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
