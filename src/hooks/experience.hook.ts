import { useQuery } from "@tanstack/react-query";
import { getAllExperiences } from "../services/experience.service";

export const useGetAllExperiences = () => {
    return useQuery({
      queryKey: ["GET_ALL_EXPERIENCES"],
      queryFn: async () => {
        const response = await getAllExperiences();
        return response;
      },
    });
  };