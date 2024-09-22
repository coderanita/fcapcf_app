import React, { SetStateAction } from "react";
import * as yup from "yup";

export type T_PERSONAL_INFO = {
  setCurrentIndex: React.Dispatch<SetStateAction<number>>;
};

export type T_PERSONAL_INFO_FIELDS = {
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  email: string;
  maritalStatus: string;
  nationality: string;
  primaryLanguage: string;
  hasDisability: string;
  typeOfDisability: string;
  fullName: string;
  secondPhone: string;
  relationship: string;
};

export const PERSONAL_INFO_SCHEMA = yup
  .object({
    firstName: yup
      .string()
      .required("First Name is invalid")
      .min(2, "First Name should contain at least 2 characters"),
    middleName: yup
      .string()
      .required("Middle Name is invalid")
      .min(2, "Middle Name should contain at least 2 characters"),
    lastName: yup
      .string()
      .required("Last Name is invalid")
      .min(2, "Last Name should contain at least 2 characters"),
    gender: yup.string().required("Please select a valid option"),
    dateOfBirth: yup.string().required("Please select a valid date"),
    address: yup
      .string()
      .required("Address is invalid")
      .min(2, "Address should contain at least 2 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter valid Email"),
    phone: yup.string().required("Phone is required"),
    maritalStatus: yup.string().required("Select valid option"),
    nationality: yup.string().required("Select valid option"),
    primaryLanguage: yup.string().required("Select valid option"),
    hasDisability: yup.string().required("Select valid option"),
    typeOfDisability: yup.string().required("Disability is required"),
    fullName: yup.string().required("Full Name is required"),
    secondPhone: yup.string().required("Phone is required"),
    relationship: yup.string().required("Select valid option"),
  })
  .required();
