import styled from "styled-components";

export const StyledEditorCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  margin: 0 0 30px;
  background: rgba(217, 217, 217, 0.12);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 60px 20px 40px;

  h1 {
    margin: 0 0 20px;
    font-size: 64px;
    text-align: center;
  }

  h2 {
    font-weight: bold;
    margin: 20px 0;
  }

  .alert {
    display: none;

    &.sucess {
      display: block;
      color: #26b11a;
      font-weight: bold;
      margin: 16px 0px;
    }

    &.error {
      display: block;
      color: #ff0000;
      font-weight: bold;
      margin: 16px 0px;
    }
  }

  .form-group {
    margin: 26px 0 0;

    h2 {
      font-weight: normal;
      font-size: 20px;
      line-height: 27px;
      margin: 0;
    }

    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      margin: 8px 0 0;
    }

    #editor {
      margin: 16px 0 0;
    }

    input[type="text"] {
      width: calc(100% - 24px);
      border: 1px solid rgba(0, 0, 0, 0.22);
      border-radius: 2px;
      margin: 8px 0 0;
      outline: none;

      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      padding: 8px 12px;
      border-radius: 5px;
    }
  }

  .btn {
    width: 90px;
    margin: 16px auto 0;
  }
`;
