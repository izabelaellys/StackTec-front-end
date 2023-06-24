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
  }

  .paginationcontainer{
    margin-top: 20px;
    
    .btn{
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
