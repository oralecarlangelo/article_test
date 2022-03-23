import React from "react";
import styled from "styled-components";
import { devices } from "../../../utils/responsive";

const ContainerWrapper = styled.div`
  border-width: 1px;
  border-style: solid;
  border-radius: 0.7rem;
  overflow: hidden;
  border-color: rgba(96, 165, 250, 0.5);
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transition:0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  ${(props) => !props.isRead} {
    background-color: rgba(219, 234, 254, 1);
    border-left-color: green;
    border-left-width: 4px;
  }};
`;

const TitleWrapper = styled.h3`
  flex: 1 1 0%;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: left;
`;

const SourceWrapper = styled.span`
  font-size: 1rem;
  color: rgba(156, 163, 175, 1);
`;

// const Image = styled.img`
//   width: 20%;
//   height: 100%;
// `;

// const Button = styled.button`;
//   border-width: 1px;
//   border-style: solid;
//   border-radius: 0.375rem;
//   padding-left: 10px;
//   padding-right: 10px;
//   height: 20px;
//   background-color: blue;
//   color: white;
// `;

const Article = ({ handleSelect, article, readArticles }) => {
  return (
    <ContainerWrapper
      as={"button"}
      onClick={() => handleSelect(article)}
      isRead={readArticles.includes(article.title)}
      data-testid="articleList"
    >
      {/* <Image src={article.urlToImage} /> */}
      <TitleWrapper data-testid="articleListTitle">
        {article.title}
      </TitleWrapper>
      <SourceWrapper data-testid="articleListSource">
        {article.source.name}
      </SourceWrapper>
    </ContainerWrapper>
  );
};

export default Article;
