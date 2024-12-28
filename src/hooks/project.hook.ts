import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../services/project.service";

export const useGetAllProjects = () => {
    return useQuery({
      queryKey: ["GET_ALL_PROJECTS"],
      queryFn: async () => {
        const response = await getAllProjects();
        return response;
      },
    });
  };