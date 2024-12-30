import axiosInstance from "../libs/AxiosInstance";

export const getAllProjects = async () => {
  try {
    const { data } = await axiosInstance.get("/projects");

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};

export const getSingleProject = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/projects/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message);
  }
};
