import styled from "styled-components";

export const StyledModal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);

  &.active{
    display: flex;
  }

  .modal-content {
  background-color: #FFFFFF;
  padding: 25px;
  width: 100%;
  max-width: 500px;
  margin: 0 40px;
  border-radius: 15px;

    .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

      &:hover,
      &:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
      }
    }

    .mensagemmodal p{
      font-weight: bold;
      font-size: 20px;
      line-height: 32px;
      margin-right: 40px;
    }
  }
`