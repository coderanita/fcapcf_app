import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../../theme/responsive";
import { appRadius, appSpacings } from "../../../../theme/others";
import { appColors } from "../../../../theme/colors";
import { appTypography } from "../../../../theme/typography";

export const styles = StyleSheet.create({
  avatarContainer: {
    width: horizontalScale(75),
    height: horizontalScale(75),
    borderRadius: horizontalScale(75),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(217,217,217,0.87)",
    marginVertical: verticalScale(appSpacings[12]),
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: horizontalScale(75),
    position: "absolute",
  },
  bodyContainer: {
    flexGrow: 1,
    backgroundColor: appColors.white,
    borderRadius: appRadius[4],
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(32),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomSection: {
    flex: 1 / 2,
    rowGap: verticalScale(appSpacings[12]),
  },
  label: {
    ...appTypography.SEMI_BOLD.F_16,
    color: appColors.primaryText,
  },
  bottomInnerSection: {
    flex: 1,
    height: verticalScale(176),
    borderRadius: appRadius[12],
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.inputBgColor,
  },
});
