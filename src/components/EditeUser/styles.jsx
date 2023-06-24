import styled from "styled-components";

export const StyledEditeUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 0 43px;
  background: rgba(217, 217, 217, 0.12);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 19px 43px;

  .form-head {
    display: flex;
    align-items: center;

    p {
      font-weight: bold;
      font-size: 40px;
      line-height: 65px;
      margin: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-weight: bold;
      font-size: 16px;
      line-height: 16px;
      margin-top: 18px;
      align-self: center;
    }

    input[type="text"],
    input[type="password"],
    input[type="email"],
    select {
      position: relative;
      border: 1px solid #605e5e;
      border-radius: 20px;
      width: auto;
      height: 37px;
      margin: 9px 0 0;
      outline: none;
      padding: 0 25px;

      font-weight: bold;
      font-size: 18px;
    }
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
    align-self: center;
    width: 183px;
    margin-top: 25px;

    &:hover {
      background-color: #960018;
    }
  }
`;
