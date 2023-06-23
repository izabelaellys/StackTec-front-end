import axios from 'axios'
import { useEffect } from 'react';
import cookie from 'js-cookie';


function Home({ result, error }) {
  // Set a cookie
  useEffect(() => {
    // Set the cookie on the frontend
    cookie.set('myCookie', "bezkoder=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huYmFyZGVlbjE4QGZhdGVjLnNwLmdvdi5iciIsImlhdCI6MTY4NzQ3ODM1MiwiZXhwIjoxNjg3NTY0NzUyfQ.VMgXJd1UakDZ9C_vYNrcjrzlPqyUtsq44q2hvBr6ONV_m14T6dnKalSt8y0uMBfL_9h36yS7AkpVFerkmsaApw; Path=/api; Max-Age=60; Expires=Fri, 23 Jun 2023 00:00:12 GMT; HttpOnly");
    const myCookieValue = cookie.get('myCookie');
    console.log(myCookieValue);
  }, []);

  // Get a cookie
  
  // console.log(myCookieValue); // Outputs: 'example-value'

  console.log(result)
  return (
    <>
      {/* {console.log(dados)} */}
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