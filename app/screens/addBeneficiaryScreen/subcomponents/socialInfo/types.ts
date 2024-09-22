import { SetStateAction } from "react";
import * as yup from "yup";

export type T_SOCIAL_INFO = {
  setCurrentIndex: React.Dispatch<SetStateAction<number>>;
};

export type T_SOCIAL_INFO_FIELDS = {
  occupation: string;
  income: string;
  houseHoldSize: string;
  educationLevel: string;
  housingStatus: string;
  vulnerability: string;
};

export const SOCIAL_INFO_SCHEMA = yup
  .object({
    occupation: yup
      .string()
      .required("Occupation is required")
      .min(2, "Occupation should contain at least 2 characters"),
    income: yup
      .string()
      .required("Income is required")
      .min(2, "Income should contain at least 2 characters"),
    houseHoldSize: yup.string().required("Please select a valid option"),
    educationLevel: yup.string().required("Please select a valid option"),
    housingStatus: yup.string().required("Please select a valid option"),
    vulnerability: yup.string().required("Please select a valid option"),
  })
  .required();
