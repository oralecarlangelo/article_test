import React from "react";
import { useArticles } from "../../hooks/useArticles";
import ArticleList from "./ArticleList";

const Articles = ({ search, setArticle }) => {
  const { loading, error, data } = useArticles({ title: search });
  const [readArticles, setReadArticles] = React.useState([]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong...</div>;
  const { articles } = data;
  return (
    <ArticleList
      setArticle={setArticle}
      articles={articles}
      setReadArticles={setReadArticles}
      readArticles={readArticles}
    />
  );
};

export default Articles;
