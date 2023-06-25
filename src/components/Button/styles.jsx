import styled from "styled-components";

export const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d1001c;
  color: white;
  padding: 0px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  height: 40px;
  font-weight: bold;
  cursor: pointer;

  &.deactive{
    display: none;
  }

  &:hover {
    background-color: #960018;
  }

  &.btn-vote{
    background-color: #d1001c;

    &:hover{
      background-color: #26B11A;
    }
  }

  &.btn-vote-del{
    background-color: #26B11A;

    &:hover{
      background-color: #d1001c;
    }
  }
`;
