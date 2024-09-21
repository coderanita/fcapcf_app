import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../theme/responsive";
import { appColors } from "../../../../theme/colors";
import { appTypography } from "../../../../theme/typography";

export const styles = StyleSheet.create({
  backgroundImage: {
    width: horizontalScale(380),
    height: verticalScale(286),
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#48CA32C7",
  },
  mainContainer: {
    paddingVertical: verticalScale(43),
    paddingHorizontal: horizontalScale(19),
    rowGap: verticalScale(34),
    flexGrow: 1,
  },
  innerContiner: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    columnGap: horizontalScale(12),
    paddingTop: verticalScale(21),
  },
  textCard: {
    width: horizontalScale(53),
    height: verticalScale(45),
    borderRadius: moderateScale(4),
    backgroundColor: appColors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  pText: {
    ...appTypography.SEMI_BOLD.F_24,
    color: appColors.black,
  },
  morningText: {
    ...appTypography.REGULAR.F_14,
    color: appColors.whiteTextColor1,
  },
  volunteerText: {
    ...appTypography.BOLD.F_14,
    color: appColors.whiteTextColor2,
  },
  line: {
    alignSelf: "center",
    width: horizontalScale(260),
    borderWidth: moderateScale(0.5),
    borderColor: appColors.whiteLineColor,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: verticalScale(15),
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    ...appTypography.BOLD.F_24,
    color: appColors.white,
  },
  statLabel: {
    ...appTypography.REGULAR.F_12,
    color: appColors.white,
  },
});
