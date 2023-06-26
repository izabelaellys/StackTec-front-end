import styled from "styled-components";

export const StyledFormsCadastro = styled.div`
  .formscontainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 20px;
    padding: 43px 22px;
    width: 400px;
    margin: 0 auto;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);

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

    .logo {
      width: 300px;
    }

    p{
      font-size: 24px;
      line-height: 24px;
      margin: 30px 0;
    }

    form {
      width: 360px;
      margin: 41px 0 0;

      .form-group{
        margin-top: 8px;
      }

      &.deactive {
        display: none;
      }

      label {
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
      }

      input[type="text"],
      input[type="password"],
      input[type="email"],
      select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        outline: none;
      }

      input::placeholder {
        color: #aaa;
        font-weight: normal;
      }

      a {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 16px;
        color: #353536;
        text-decoration: none;
      }

      .btn {
        width: 100%;
        margin: 41px auto 0;
        text-transform: uppercase;
      }

      .forms-error{
        display: none;
        font-weight: bold;
        font-size: 14px;
        line-height: 14px;
        color: #eb120ae1;
        margin: 4px 0 10px;

        &.active{
          display: block;
        }
      }
    }

    & > .btn {
      width: 100%;
      text-transform: uppercase;
    }
  }
`;
