import React from "react";
import styled from "styled-components";
import Article from "../Article";

const Wrapper = styled.div`
  display: grid;
  gap: .5rem;
  padding: 10px;
`;

const ArticleList = ({
  setArticle,
  articles = [],
  readArticles,
  setReadArticles,
}) => {
  const handleSelect = (selectedArticle) => {
    if (!readArticles.includes(selectedArticle.title)) {
      setReadArticles([...readArticles, selectedArticle.title]);
    }
    setArticle(selectedArticle);
  };
  return (
    <Wrapper>
      {articles.map((article, index) => (
        <Article
          article={article}
          key={index}
          handleSelect={handleSelect}
          readArticles={readArticles}
        />
      ))}
    </Wrapper>
  );
};

export default ArticleList;
