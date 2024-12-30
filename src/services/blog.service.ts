"use server";

import axiosInstance from "../libs/AxiosInstance";

export const getAllBlogs = async () => {
  try {
    const { data } = await axiosInstance.get("/blogs");

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
export const getSingleBlog = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/blogs/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
