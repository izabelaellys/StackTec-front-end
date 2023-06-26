import { useEffect, useState, useContext } from "react";
import { StyledPostByTags } from "./styles";

import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import PostCard from "../PostCard";
import Button from "../Button";
import PostAction from "../PostAction";

import {HomeContext} from '@/components/Context/HomeContext';

const PostByTags = () => {
  const itemsByPage = 2;
  const [dataTags, setDataTags] = useState([])
  const [posts, setPosts] = useState()
  const [MyCookie, setMyCookie] = useState()
  const router = useRouter();
  const { page, tag } = router.query;
  const {orderBy} = useContext(HomeContext)
  
  useEffect(() => {
    setMyCookie(cookie?.get("myCookie"));
    setDataTags(tag?.split(' '))
  }, [cookie?.get("myCookie"), tag]);


  useEffect(() => {
      const callApi = async () => {
        const data = {
          MyCookie,
          page: page || 1,
          itemsByPage,
          dataTags,
          orderBy: orderBy
        }

        try {
          const response = await axios.post("/api/pesquisa-por-tag", data);
    
          console.log(response.data)
          setPosts(response.data)
        } catch (error) {
          console.log(error);
        }
    }

    callApi()
  }, [page, dataTags])

  return (
    <StyledPostByTags>
      <PostAction />
      <PostCard posts={posts?.postDtos} />
      {posts?.totalPages && page < posts?.totalPages && <Button title="Ver mais"  link={"/post-by-tag?page=" + (parseInt(page) + 1) + "&tag=" + tag} />}
      {!page && posts?.maxResults > 0 && posts?.totalPages > 1 && <Button title="Ver mais"  link={"/post-by-tag?page=" + (parseInt(page) + 1) + "&tag=" + tag} /> } 
    </StyledPostByTags>
  )
}

export default PostByTags