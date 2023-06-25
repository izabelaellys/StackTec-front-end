import styled from "styled-components";

export const StyledTagsBar = styled.div`
  position: fixed;
  width: 100%;
  height: 45px;
  left: 0px;
  top: 77px;
  background: #e8e4e4;
  padding: 0 82px;

  display: none;
  align-items: center;

  z-index: 99;

  &.active {
    display: flex;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
  }

  .buttoncontainer {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    margin-left: 10px;
  }

  .btn-tag {
    display: flex;
    align-items: center;
    background: #cdcdcd;
    border-radius: 5px;
    padding: 0px 10px;
    height: 32px;
    border: none;
    cursor: pointer;
    text-decoration: none;

    color: black;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;

    text-transform: capitalize;
  }
`;
