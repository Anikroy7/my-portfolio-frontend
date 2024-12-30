import { useQuery } from "@tanstack/react-query";

import { getAllProjects, getSingleProject } from "../services/project.service";

export const useGetAllProjects = () => {
  return useQuery({
    queryKey: ["GET_ALL_PROJECTS"],
    queryFn: async () => {
      const response = await getAllProjects();

      return response;
    },
  });
};

export const useGetSingleProject = (id: string) => {
  return useQuery({
    queryKey: ["GET_SiNGLE_PROJECT"],
    queryFn: async () => {
      const response = await getSingleProject(id);

      return response;
    },
  });
};
