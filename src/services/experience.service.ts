"use server";

import axiosInstance from "../libs/AxiosInstance";

export const getAllExperiences = async () => {
  try {
    const { data } = await axiosInstance.get("/experiences");

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
