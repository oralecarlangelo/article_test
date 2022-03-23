import React from "react";
import Search from "../../components/Search";
import SelectedArticle from "../../components/Articles/SelectedArticle";
import Articles from "../../components/Articles";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  background-color: rgba(239, 246, 255, 1);
`;

const Wrapper = styled.div`
  flex: 1;
  overflow-x: scroll;
  height: 93vh;
`;

const Header = styled.h1`
  font-size: 32px;
  font-weight: bold;
  background-color: rgba(96, 165, 250, 1);
  color: rgba(239, 246, 255, 1);
  padding: 30px;
  z-index: 1;
`;

const NoArticleWrapper = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2rem;
  background-color: white;
`;

const ArticlesPage = () => {
  const [search, setSearch] = React.useState("");
  const [article, setArticle] = React.useState();
  return (
    <>
      <Header id="article">Articles</Header>

      <ContainerWrapper id="containerWrapper">
        <Wrapper id="leftWrapper">
          <Search setSearch={setSearch} />
          <Articles setArticle={setArticle} search={search} />
        </Wrapper>
        <Wrapper id="rightWrapper">
          {article ? (
            <SelectedArticle article={article} />
          ) : (
            <NoArticleWrapper>NO SELECTED ARTICLE</NoArticleWrapper>
          )}
        </Wrapper>
      </ContainerWrapper>
    </>
  );
};

export default ArticlesPage;
