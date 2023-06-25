import styled from "styled-components";

export const StyledPostList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0px 43px;

  .questioncard{
    display: flex;
    width: 100%;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin: 37px 0 0;
    padding: 16px 14px;
    column-gap: 17px;

    .resposta{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      padding: 0 16px;
      border: 1px solid #FF0000;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 5px;
      margin: 20px 0 0;

      &.active{
        border: 1px solid #26B11A;
      }
    }

    .buttoncontainer {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 10px;
      margin-left: 10px;

      .btn-tag {
        display: flex;
        align-items: center;
        background: #cdcdcd;
        border-radius: 5px;
        padding: 0px 10px;
        height: 32px;
        border: none;
        cursor: pointer;
        text-decoration: none;

        color: black;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;

        text-transform: capitalize;
      }
    }

    .questioncontent > a{
      font-size: 18px;
      line-height: 25px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000000;
      margin: 18px 0;
    }
  }

  .btn{
    margin: 30px auto 0;
  }
`