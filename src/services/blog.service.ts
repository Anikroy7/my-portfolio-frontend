"use server"


import axiosInstance from "../libs/AxiosInstance";

export const getAllBlogs = async () => {
    try {
      const { data } = await axiosInstance.get("/blogs");
      return data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  };