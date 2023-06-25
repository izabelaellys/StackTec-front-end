import styled from "styled-components";

export const StyledSinglePost = styled.div`
  padding: 60px 0 40px;
  line-height: 25px;

  .postcontent {
    border: 1px solid black;
    padding: 30px;
  }

  h1 {
    margin: 0 0 20px;
    font-size: 64px;
    line-height: 64px;
  }

  h2 {
    margin: 20px 0;
    line-height: 24px;
  }

  img {
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

    .btn {
      margin: 0;
    }
  }

  .editor {
    margin: 20px 0 0;

    &.deactive {
      display: none;
    }

    p {
      display: none;
      font-weight: bold;
      margin: 16px 0px;
    }

    .sucess {
      display: block;
      color: #26b11a;
    }

    .error {
      display: block;
      color: #ff0000;
    }
  }

  .posttags {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;

    a {
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

  .postComentarios {
    margin-top: 20px;

    .comentariocard {
      margin: 16px 0 0;

      .comentarioautor {
        font-weight: bold;
      }

      p {
        margin: 0px;
      }

      p:last-of-type {
        margin: 8px 0 0;
      }
    }
  }

  .postresposta {
    .respostacontainer {
      margin: 20px 0 0;
      padding: 20px;
      border: 1px solid black;

      &.active {
        background: rgba(38, 177, 26, 0.15);
      }

      .btn-resposta {
        display: none;
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
        margin: 0 auto;

        &.active{
          display: flex;
        }

        &:hover {
          background-color: #26b11a;
        }
      }

      .comentariosResposta {
        margin: 20px 0 0;
        h3 {
          font-size: 18px;
        }

        .comentarioautor {
          margin: 16px 0 0;
          font-weight: bold;
        }

        p {
          margin: 0px;
        }

        p:last-of-type {
          margin: 8px 0 0;
        }
      }

      .btn {
        margin: 10px auto 0;
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
    }
  }
`;
