import { StyleSheet } from "react-native";
import { appColors } from "../../../../theme/colors";
import { appRadius } from "../../../../theme/others";
import { horizontalScale, verticalScale } from "../../../../theme/responsive";

export const styles = StyleSheet.create({
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
});
