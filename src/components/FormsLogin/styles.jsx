import styled from "styled-components";

export const StyledFormsLogin = styled.div`
  .formscontainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    border-radius: 20px;
    padding: 43px 22px;
    margin: 0px auto 43px;
    width: 360px;
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

    form {
      width: 360px;
      margin: 41px 0 0;

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
        width: 339px;
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

    .sucess {
      display: none;
      flex-direction: column;
      align-items: center;
      width: 360px;
      margin-top: 50px;

      &.active{
        display: flex;
      }

      .c-loader {
        animation: is-rotating 1.2s infinite;
        border: 6px solid #e5e5e5;
        border-radius: 50%;
        border-top-color: #13f378;
        height: 50px;
        width: 50px;
      }
      
      p {
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        text-align: justify;
      }

      a{
        color: #eb120ae1;
      }
    }

    & > .btn {
      width: 100%;
      width: 300px;
      text-transform: uppercase;
    }
    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;
