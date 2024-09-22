import { View, Text } from "react-native";
import React from "react";
import { T_FILE_CARD } from "./types";
import { styles } from "./styles";
import { ImageIcon, PinIcon, VideoIcon } from "../../../../../assets/icons";
import { horizontalScale, verticalScale } from "../../../../theme/responsive";

const FileCard: React.FC<T_FILE_CARD> = ({ file }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        {file.type === "image" ? <ImageIcon /> : <VideoIcon />}
      </View>
      <PinIcon
        width={horizontalScale(7)}
        height={verticalScale(9)}
        style={styles.pinIcon}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.info}>{file.title}</Text>
        <Text style={styles.info}>{`Size : ${file.size}`}</Text>
        <Text style={styles.info}>{`Date taken : ${file.takenDate}`}</Text>
      </View>
    </View>
  );
};

export default FileCard;
