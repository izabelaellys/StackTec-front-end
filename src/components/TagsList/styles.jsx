import styled from "styled-components";

export const StyledTagsList = styled.div`
  .taghead {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000000;
    margin-top: 40px;

    p {
      font-weight: bold;
      font-size: 20px;
      line-height: 27px;
    }

    p:first-of-type {
      width: 240px;
    }
  }

  .paginationcontainer {
    margin-top: 20px;

    .btn {
      margin: 0 auto;
      width: 200px;
    }
  }
`;

export const TagCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(115, 115, 115, 0.4);
  height: 64px;
  cursor: pointer;

  .tagName {
    width: 240px;
  }

  .tagQt {
    text-align: left;
    width: 100px;
  }

  &.active .viewcontainer {
    background-color: #26b11a;
  }

  .viewcontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 41px;
    height: 39px;
    background-color: #eb3d3d;
    border-radius: 15px;
  }
`;

export const TagsInfo = styled.div`
  position: fixed;
  top: 120px;
  right: 0px;
  width: 356px;
  overflow-y: scroll;

  .tag-info-card {
    width: 260px;
    margin: 0 0 0 56px;

    &:last-of-type {
      margin-top: 56px;
    }

    .tag-info-card-head {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 49px;
      background: #efefef;
      border: 1px solid #efefef;
      backdrop-filter: blur(2px);
      border-radius: 5px 5px 0px 0px;

      font-weight: bold;
      font-size: 15px;
      line-height: 20px;
      color: #000000;
    }

    .tag-info-card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(217, 217, 217, 0.12);
      border: 1px solid #efefef;
      backdrop-filter: blur(2px);
      border-radius: 0px 0px 5px 5px;
      padding: 43px 16px 16px;

      .alert {
        display: none;
        font-weight: bold;
        font-size: 15px;
        line-height: 20px;
        color: #000000;
        margin: 10px 0;

        &.active {
          display: block;
        }
      }

      .btn {
        margin-top: 20px;
      }

      .tags-selecionadas-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 10px;
        column-gap: 10px;

        button {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          background-color: transparent;
          border-radius: 5px;
          border: 2px solid #26b11a;
          font-weight: bold;
          font-size: 15px;
          line-height: 20px;
          transition: all 0.2s ease-in-out;
          height: 30px;

          ${'' /* &:hover {
            border: 2px solid #eb3d3d;
          } */}
        }
      }
    }
  }
`;
