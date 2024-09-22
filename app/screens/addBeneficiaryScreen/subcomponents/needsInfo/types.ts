import { SetStateAction } from "react";
import * as yup from "yup";

export type T_NEEDS_INFO = {
  setCurrentIndex: React.Dispatch<SetStateAction<number>>;
};

export type T_NEEDS_INFO_FIELDS = {
  typeOfAssistance: string;
  previousAssistance: string;
  healthStatus: string;
  ethnicity: string;
  religion: string;
  skills: string;
  referOrg: string;
};

export const NEEDS_INFO_SCHEMA = yup
  .object({
    typeOfAssistance: yup
      .string()
      .required("Type of assistance is required")
      .min(2, "Type of assistance should contain at least 2 characters"),
    previousAssistance: yup
      .string()
      .required("Previous assistance is required")
      .min(2, "Previous assistance should contain at least 2 characters"),
    healthStatus: yup.string().required("Please select a valid option"),
    ethnicity: yup.string().required("Please select a valid option"),
    religion: yup.string().required("Please select a valid option"),
    skills: yup.string().required("Please select a valid option"),
    referOrg: yup
      .string()
      .required("Refer is required")
      .min(2, "Refer should contain at least 2 characters"),
  })
  .required();
