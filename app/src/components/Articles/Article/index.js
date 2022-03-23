import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  padding: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375rem;
  ${(props) => !props.isRead} {
  border-left-width: 1rem;
  border-left-color: green;
  }}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375rem;
  padding-left: 10px;
  padding-right: 10px;
  height: 20px;
  background-color: blue;
  color:white
`;

const Article = ({ handleSelect, article, readArticles }) => {
  return (
    <ContainerWrapper isRead={readArticles.includes(article.title)}>
      <Wrapper>
        <h3>{article.title}</h3>
        <Button onClick={() => handleSelect(article)}>Read</Button>
      </Wrapper>
    </ContainerWrapper>
  );
};

export default Article;
