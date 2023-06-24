import axios from 'axios'
import { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import MyComponent from '@/components/ContextTeste';
import { HomeContextProvider } from '@/components/Context/HomeContext';


function Home({ result, error }) {
  const [logado, setLogado ] = useState(false)

  useEffect(() => {
    setLogado(cookie.get('myCookie') ? true : false)
  }, [cookie.get('myCookie') ]);

  // Carrega os 10 primeiros posts para quando o usuário não está logado
  useEffect(() => {

  }, [])

  // Get a cookie
  
  // console.log(myCookieValue); // Outputs: 'example-value'

  if(logado)
    return (
      <HomeContextProvider>
        <MyComponent />
      </HomeContextProvider>
    )
  else
    return (
      <>
        <h1>Teste</h1>
      </>
    )
}

export default Home

export async function getServerSideProps(context) {
  const { req } = context;
  const myCookieValue = req.cookies.myCookie; // Replace 'myCookie' with the actual name of your cookie

  console.log(myCookieValue); 
  
  const myHeaders = {
    Cookie: myCookieValue
  };

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  try {
    const response = await axios.get("http://localhost:8080/api/post/v1.1/2", requestOptions);
    const result = response.data;
    return {
      props: {
        result
      }
    }
  } catch (error) {
    console.log('error', error);
    return {
      props: {
        error: error.message
      }
    };
  }
}