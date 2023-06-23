import styled from "styled-components";

export const StyledHeader = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 77px;
  background: rgb(122, 119, 119);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  .logo {
    img {
      width: 135px;
      height: auto;
      margin-left: 99px;
    }
  }

  .caixa-pesquisa {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    max-width: 631px;
    margin: 0 20px;

    input {
      width: 100%;
      height: 39px;
      background: #d9d9d9;
      border: 1px solid #605e5e;
      border-radius: 20px;
      padding: 0 50px 0 23px;
      outline: none;
    }

    .search-icon {
      position: absolute;
      right: 10px;
      top: 0px;
    }
  }

  .loginsection {
    display: none;
    margin-right: 99px;

    &.active {
      display: flex;
    }

    .btn:first-of-type {
      width: 60px;
      margin-right: 40px;
    }

    .btn:nth-of-type(2) {
      width: 115px;
    }
  }

  .logadosection {
    display: none;
    align-items: center;
    margin-right: 99px;

    &.active {
      display: flex;
    }

    p {
      font-size: 25px;
      line-height: 34px;
      margin: 0 19px;
    }

    a:nth-child(2) {
      margin-right: 11px;
    }

    .btn {
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

      &:hover {
        background-color: #960018;
      }
    }
  }
`;
