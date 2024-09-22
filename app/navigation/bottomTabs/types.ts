import { FileManagerStackParamList } from "../fileManagerStack/types";
import { HomeStackParamList } from "../homeStack/types";
import { ProfileStackParamList } from "../profileStack/types";
import { ProjectsStackParamList } from "../projectsStack/types";

export type BottomTabsParamList = {
  HomeStack?: HomeStackParamList;
  ProjectsStack?: ProjectsStackParamList;
  FileManagerStack?: FileManagerStackParamList;
  ProfileStack?: ProfileStackParamList;
};
