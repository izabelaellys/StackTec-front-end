import styled from "styled-components";

export const StyledSinglePost = styled.div`
  padding: 60px 0 40px;
  h1 {
    margin: 0 0 20px;
    font-size: 64px;
  }

  h2 {
    margin: 20px 0;
  }

  .btn {
    width: 100px;
    margin: 20px auto 0;
  }

  textarea {
    width: 100%;
  }

  .postvotos {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 20px;
      font-weight: bold;
    }

    .btn-vote {
      margin: 0;
    }
  }

  .editor{
    margin: 20px 0 0;
  }

  .posttags {
    margin-top: 20px;

    a{
      margin-right: 10px;
      color: #000000;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .postComentarios{
    margin-top: 20px;
  }
`;
