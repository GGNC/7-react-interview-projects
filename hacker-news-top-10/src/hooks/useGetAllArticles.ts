import { useQuery } from "@tanstack/react-query";
import { getAllArticles } from "../utils/articles";

function useGetAllArticles() {
  const { data, isLoading } = useQuery({
    queryKey: ["articleIds"],
    queryFn: () => getAllArticles(),
  });
  return { data, isLoading };
}

export default useGetAllArticles;
