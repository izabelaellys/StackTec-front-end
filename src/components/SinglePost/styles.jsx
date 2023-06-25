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

  img{
    height: auto;
    max-width: 100%;
    object-fit: cover;
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

    p{
      display: none;
      font-weight: bold;
      margin: 16px 0px;
    }

    .sucess{
      display: block;
      color: #26B11A;
    }

    .error{
      display: block;
      color: #FF0000;
    }
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

    .comentariocard{
      margin: 16px 0 0;

      .comentarioautor{
        font-weight: bold;
      }

      p{
        margin: 0px;
      }

      p:last-of-type{
        margin: 8px 0 0;
      }
    }
  }
`;
