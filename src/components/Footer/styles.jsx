import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: linear-gradient(to right, #960018, #d1001c);
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;

  #footer-image {
    max-height: 25px;
    margin-right: 20px; /* espaçamento entre imagem e borda esquerda do footer */
  }
  
  #footer-text {
    display: inline-block;
    font-size: 10px;
    color: white;
    margin-right: 10px; /* espaçamento entre imagem e texto */
  }
`;
