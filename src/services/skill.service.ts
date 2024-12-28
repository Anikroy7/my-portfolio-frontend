"use server"

import axiosInstance from "../libs/AxiosInstance";

  export const getAllSkills = async () => {
    try {
      const { data } = await axiosInstance.get("/skills");
      return data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };