import { useQuery } from "@tanstack/react-query";

import { getAllBlogs, getSingleBlog } from "../services/blog.service";

export const useGetAllBlogs = () => {
  return useQuery({
    queryKey: ["GET_ALL_BLOGS"],
    queryFn: async () => {
      const response = await getAllBlogs();

      return response;
    },
  });
};

export const useGetSingleBlog = (id: string) => {
  return useQuery({
    queryKey: ["GET_SiNGLE_BLOG"],
    queryFn: async () => {
      const response = await getSingleBlog(id);

      return response;
    },
  });
};
