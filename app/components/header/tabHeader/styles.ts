import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../theme/responsive";
import { appRadius, appSpacings } from "../../../theme/others";
import { appColors } from "../../../theme/colors";
import { appTypography } from "../../../theme/typography";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: horizontalScale(appSpacings[12]),
  },
  searchContainer: {
    flex: 1,
    height: verticalScale(45),
    borderRadius: appRadius[4],
    backgroundColor: appColors.inputBgColor,
    paddingHorizontal: horizontalScale(appSpacings[16]),
    color: appColors.black,
  },
  profileIconContainer: {
    width: verticalScale(45),
    height: verticalScale(45),
    borderRadius: appRadius[4],
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.primary,
  },
  profileText: {
    ...appTypography.SEMI_BOLD.F_24,
    color: appColors.white,
  },
});
