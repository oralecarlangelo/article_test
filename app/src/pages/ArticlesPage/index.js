import React from "react";
import Search from "../../components/Search";
import SelectedArticle from "../../components/Articles/SelectedArticle";
import Articles from "../../components/Articles";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const Header = styled.h1`
  font-size: 32px;
  font-weight: bold;
  background-color: red;
  padding: 10px;
`;

const ArticlesPage = () => {
  const [search, setSearch] = React.useState("");
  const [article, setArticle] = React.useState();
  return (
    <>
      <Header>Articles</Header>
    
    <ContainerWrapper>
      <Wrapper>
        <Search setSearch={setSearch} />
        <Articles setArticle={setArticle} search={search} />
      </Wrapper>
      {article && (
        <Wrapper>
          <SelectedArticle article={article} />
        </Wrapper>
      )}
    </ContainerWrapper>
    </>

  );
};

export default ArticlesPage;
