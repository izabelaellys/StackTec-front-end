import PostCard from '@/components/PostCard';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

import cookie from 'js-cookie';


function PesquisaPost(){
  const router = useRouter()
  const { search } = router.query
  const [MyCookie, setMyCookie] = useState()
  const [posts, setPosts ] = useState()

  useEffect(() => {
    if(!cookie.get('myCookie')){
      router.push('/')
    }
  }, [cookie.get('myCookie')])

  useEffect(() => {
    setMyCookie(cookie?.get('myCookie'))
  }, [cookie?.get('myCookie')])

  useEffect(() => {
    const makeSearchPost = async () => {

      try {
        const response = await axios.post("/api/pesquisa-post", {
          MyCookie,
          search,
        });

        console.log(response.data)
        setPosts(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    makeSearchPost()

  }, [search])

  return(
    <>
      <PostCard posts={posts?.postDtos} />
    </>
  )
}

export default PesquisaPost