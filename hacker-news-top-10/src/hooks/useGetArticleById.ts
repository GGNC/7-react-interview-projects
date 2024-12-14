import { useQuery } from "@tanstack/react-query";
import { getArticleById } from "../utils/articles";
import { ArticleInterface } from "../utils/consts/interfaces";
interface useGetArticleByIdProps {
  articleId: string;
}
function useGetArticleById({ articleId }: useGetArticleByIdProps) {
  const { data, isLoading } = useQuery<ArticleInterface>({
    queryKey: [`article-${articleId}`],
    queryFn: () => getArticleById(articleId),
  });
  return { data, isLoading };
}

export default useGetArticleById;
