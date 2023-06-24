import styled from "styled-components";

export const StyledSearchBar = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;

  input{
    width: 100%;
    height: 39px;
    background: #D9D9D9;
    border: none;
    border-radius: 20px;
    padding: 0 50px 0 23px;
    outline: none;
  }

  .search-icon{
    position: absolute;
    right: 10px;
    top: 0px;
  }
`
