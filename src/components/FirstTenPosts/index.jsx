import { useEffect, useState } from "react";
import { StyledFirstTenPosts } from "./styles";
import axios from "axios";
import Modal from "../Modal";

const FirstTenPosts = () => {
  const [postList, setPostList] = useState()
  const [openModal, setOpenModal ] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/post/v1.1/getFirstTenPosts");
        setPostList(response.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    
    fetchData();
  }, [])
  return (
    <StyledFirstTenPosts>
      {openModal && <Modal message="Para ver os detalhes do post é necessário estar logado" titleButton="Login" href="/login" isOpen={true} externalAction={setOpenModal}/>}
      {postList?.map((post) => {
        return (
          <div className="questioncard" onClick={(e) => {
            e.preventDefault()
            setOpenModal(true)
          }}>
            <div>
              <p>{post?.votos} votos</p>
              <p className="resposta">- resposta</p>
            </div>
            <div className="questioncontent">
              <div className="buttoncontainer">
                {post?.tags?.map((tag) => {
                  return <a href={"/post-by-tag?page=1&tag=" + tag} className="btn-tag">{tag}</a>;
                })}
              </div>
              <a href="/">{post?.titulo}</a>
            </div>
          </div>
        )
      })}
    </StyledFirstTenPosts>
  )
}

export default FirstTenPosts