import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 12px;
  padding: 4px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.375rem;
  flex: 1 1 0%;
`;

const Label = styled.label`
  font-size: 14px;
  margin-right: 4px;
  align-self: center;
`;
const Wrapper = styled.div`
  padding: 8px;
  display: flex
  
`;

const Search = ({ setSearch }) => {
  return (
    <Wrapper>
      <Label>Search</Label>
      <Input
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default Search;
