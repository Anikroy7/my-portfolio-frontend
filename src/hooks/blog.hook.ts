import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../services/blog.service";

export const useGetAllBlogs = () => {
    return useQuery({
      queryKey: ["GET_ALL_BLOGS"],
      queryFn: async () => {
        const response = await getAllBlogs();
        return response;
      },
    });
  };
  