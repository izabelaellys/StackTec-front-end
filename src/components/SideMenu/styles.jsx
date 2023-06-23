import styled from "styled-components";

export const StyledSideMenu = styled.div`
  position: fixed;
  top: 122px;
  left: 0;
  display: none;
  flex-direction: column;
  max-width: 260px;
  width: 100%;
  padding: 43px 20px 0px 46px;

  &.active{
    display: flex;
  }

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000000;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;

    &.active{
      font-weight: bold;
    }

    &:not(:first-of-type){
      margin-top: 16px;
    }

    img{
      max-width: 22px;
      height: 19px;
      margin-right: 10px;
    }
  }
`;
