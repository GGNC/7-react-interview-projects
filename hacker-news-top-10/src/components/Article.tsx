import useGetArticleById from "../hooks/useGetArticleById";

interface ArticleProps {
  articleId: string;
}
function Article({ articleId }: ArticleProps) {
  const { data: article, isLoading } = useGetArticleById({ articleId });
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="article">
          <a href={article?.url} target="_blank" className="article_link">
            {article?.title}
          </a>
          <p>
            <span className="article_score">{article?.score}</span> by{" "}
            <span className="article_by">{article?.by}</span>
          </p>
        </div>
      )}
    </>
  );
}

export default Article;
