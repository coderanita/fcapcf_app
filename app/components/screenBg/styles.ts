import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../../theme/colors";

export const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: appColors.white,
  },
  backgroundImage: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
