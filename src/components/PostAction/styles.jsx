import styled from "styled-components";

export const StyledPostAction = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 40px;
  padding-top: 60px;

  .filter {
    display: flex;
    align-items: center;

    button {
      height: 28px;
      border: 1px solid #737373;
      background: rgba(217, 217, 217, 0.42);

      &.active {
        background: #d9d9d9;
      }

      &:first-of-type {
        border-radius: 3px 0px 0px 3px;
        margin-left: 8px;
      }

      &:last-of-type {
        border-radius: 0px 3px 3px 0px;
      }
    }
  }
`;
