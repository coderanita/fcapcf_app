import { View, Text, Image } from "react-native";
import React from "react";
import { T_PROJECT_CARD } from "./types";
import { styles } from "./styles";
import { IMAGES } from "../../../../../assets/images";
import { CalendarIcon, PinIcon } from "../../../../../assets/icons";
import { BaseButton } from "../../../../components";

const ProjectCard: React.FC<T_PROJECT_CARD> = ({ project, onPress }) => {
  return (
    <BaseButton
      onPress={onPress}
      otherProps={{
        style: styles.mainContainer,
      }}
    >
      <View style={styles.leftContainer}>
        <Image
          source={IMAGES.PROJECT_IMG}
          resizeMode="cover"
          style={styles.projectImg}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightTopContainer}>
          <View style={styles.row}>
            <Text style={styles.title}>{project.title}</Text>
            <Text style={styles.viewmore}>{`view more`}</Text>
          </View>
          <Text numberOfLines={2} style={styles.info}>
            {project.info}
          </Text>
        </View>

        <View style={styles.rightBottomContainer}>
          <View style={styles.separator} />
          <View style={styles.bottomRow}>
            <View style={[styles.row2, { justifyContent: "flex-start" }]}>
              <CalendarIcon />
              <Text style={styles.date}>{project.date}</Text>
            </View>
            <View style={styles.avatars}>
              <View
                style={[
                  styles.mainAvatar,
                  styles.avatar1,
                  { backgroundColor: "#D9D9D9" },
                ]}
              >
                <Text style={styles.avatarText}>{`AP`}</Text>
              </View>
              <View
                style={[
                  styles.mainAvatar,
                  styles.avatar2,
                  { backgroundColor: "#C14242" },
                ]}
              >
                <Text style={styles.avatarText}>{`EA`}</Text>
              </View>
              <View
                style={[
                  styles.mainAvatar,
                  styles.avatar3,
                  { backgroundColor: "#42A7A7" },
                ]}
              >
                <Text style={styles.avatarText}>{`TB`}</Text>
              </View>
            </View>
            <View style={[styles.row2, { justifyContent: "flex-end" }]}>
              <PinIcon />
              <Text style={styles.date}>{project.location}</Text>
            </View>
          </View>
        </View>
      </View>
    </BaseButton>
  );
};

export default ProjectCard;
