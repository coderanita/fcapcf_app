import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FileManagerStackParamList } from "../../navigation/fileManagerStack/types";

export type T_FILE_MANAGER_SCREEN = NativeStackScreenProps<
  FileManagerStackParamList,
  "FileManagerScreen"
>;
export type T_FILE_MANAGER_ROUTE_PARAMS = undefined;

export type T_FILE = {
  key: string;
  title: string;
  size: string;
  takenDate: string;
  type: "image" | "video";
};

export type T_FILE_LIST_ITEM = {
  title: string;
  data: T_FILE[];
};
