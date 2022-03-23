import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.div`
  padding: 30px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  padding: 10px;
  font-size: 1.25rem;
  font-weight: 600;

  span {
    font-weight: 500;
    font-size: 1rem;
    color: blue;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const DescriptionWrapper = styled.p`
  width: 100%;
  font-size: 1.2rem;
`;

const SelectedArticle = ({ article }) => {
  return (
    <ArticleWrapper>
      <Title>
        {article.title}
        <span>
          - {new Date(article.publishedAt).toLocaleDateString("en-US")}
        </span>
      </Title>
      <Image src={article.urlToImage} />
      <DescriptionWrapper>{article.content}</DescriptionWrapper>
    </ArticleWrapper>
  );
};

export default SelectedArticle;
