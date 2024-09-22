import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProjectsStackParamList } from "../../navigation/projectsStack/types";

export type T_BENEFICIARY_SCREEN = NativeStackScreenProps<
  ProjectsStackParamList,
  "AddBeneficiariyScreen"
>;
export type T_BENEFICIARY_SCREEN_ROUTE_PARAMS = undefined;

export type T_STEP_ITEM = {
  key: string;
  title: string;
  isCompleted: boolean;
};
