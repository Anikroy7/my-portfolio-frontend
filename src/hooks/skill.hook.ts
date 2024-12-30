import { useQuery } from "@tanstack/react-query";

import { getAllSkills } from "../services/skill.service";

export const useGetAllSkills = () => {
  return useQuery({
    queryKey: ["GET_ALL_SKILLS"],
    queryFn: async () => {
      const response = await getAllSkills();

      return response;
    },
  });
};
