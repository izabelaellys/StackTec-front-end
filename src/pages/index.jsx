import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react';
import cookie from 'js-cookie';
import {HomeContext} from '@/components/Context/HomeContext';
import TagsBar from '@/components/TagsBar';
import FirstTenPosts from '@/components/FirstTenPosts';
import PostAction from '@/components/PostAction';

import { useRouter } from 'next/router';
import PostList from '@/components/PostList';

function Home({ result }) {
  const itemsByPage = 6
  const router = useRouter()
  const { page } = router.query
  const {orderBy} = useContext(HomeContext)
  const [logado, setLogado ] = useState(false)
  
  useEffect(() => {
    const data = {
      page: page || 1,
      orderBy: orderBy || 'recentes',
      itemsByPage: itemsByPage
    }

    router.push({
      pathname: '/',
      query: data,
    });
  }, [orderBy, page])

  useEffect(() => {
    setLogado(cookie.get('myCookie') ? true : false)
  }, [cookie.get('myCookie') ]);

  if(logado)
    return (
      <>
        <TagsBar className="active"/>
        <PostAction />
        <PostList data={result}/>
      </>
      
    )
  else
    return (
      <>
        <FirstTenPosts />
      </>
    )
}

export default Home

export async function getServerSideProps(context) {
  const { req, query } = context;
  const myCookieValue = req.cookies.myCookie;
  const {page, orderBy, itemsByPage} = query;

  const url = 'http://localhost:8080/api/post/v1.1/getPageable/' + page + '/' + itemsByPage + '/' + orderBy
  
  const myHeaders = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Cookie: myCookieValue,
  };

  try {
    const response = await axios.post(url, null, {
      headers: myHeaders,
    });
    const result = response.data;

    return {
      props: {
        result,
      },
    };
  } catch (error) {
    console.log('Error:', error);

    return {
      props: {
        result: null,
      },
    };
  }
}