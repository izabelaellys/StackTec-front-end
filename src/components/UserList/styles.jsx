import styled from "styled-components";

export const StyledUserList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .caixa-pesquisa{
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
  }

  .userhead {
    display: flex;
    border-bottom: 1px solid #000000;
    margin-top: 40px;

    p {
      font-weight: bold;
      font-size: 20px;
      line-height: 27px;
      width: 350px;

      &:first-of-type {
        margin-right: 60px;
      }
    }
  }

  .list-user-content {
    .list-user-card {
      display: flex;
      align-items: center;
      height: 71px;
      border-bottom: 1px solid rgba(115, 115, 115, 0.4);

      p {
        font-size: 20px;
        line-height: 27px;
        width: 300px;
        margin-right: 60px;

        &:last-of-type {
          margin-right: auto;
        }
      }

      .botoes-container {
        justify-self: flex-end;

        a {
          text-decoration: none;
          height: 39px;
          padding: 7px 17px;
          border-radius: 15px;

          font-size: 20px;
          line-height: 27px;
          color: #000000;
        }

        .editar{
          height: 39px;
          background: #EDBA04;
        }
      }
    }
  }

  .btn{
    margin: 20px auto 0px;
  }
`;
