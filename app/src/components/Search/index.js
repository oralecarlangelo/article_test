import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 15px;
  padding: 5px;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.375rem;
  border-color: rgba(96, 165, 250, 0.5);
  flex: 1 1 0%;
`;

const Label = styled.label`
  font-size: 14px;
  margin-right: 4px;
  align-self: center;
  font-weight: 600;
`;
const Wrapper = styled.div`
  padding: 8px;
  display: flex;
`;

const Search = ({ setSearch }) => {
  return (
    <Wrapper data-testid="searchWrapper">
      <Label data-testid="searchLabel">Search</Label>
      <Input
        data-testid="searchInput"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default Search;
