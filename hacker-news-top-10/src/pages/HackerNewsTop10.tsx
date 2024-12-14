import { useMemo } from "react";
import useGetAllArticles from "../hooks/useGetAllArticles";
import Article from "../components/Article";

function HackerNewsTop10() {
  const { data: articles, isLoading } = useGetAllArticles();
  const renderedArticles = useMemo(() => {
    if (!articles) return null;
    return articles.map((articleId: string) => {
      return (
        <li key={articleId}>
          <Article articleId={articleId} />
        </li>
      );
    });
  }, [articles]);
  return (
    <div className="container mx-auto">
      <h1 className="header">Top 10 Articles from the Hacker News</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="article-container">{renderedArticles}</ul>
      )}
    </div>
  );
}

export default HackerNewsTop10;
