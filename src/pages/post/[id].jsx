import SinglePost from '@/components/SinglePost';
import axios from 'axios'

const Post = ({ data }) => {

  return (
    <>
      <SinglePost data={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const id = params.id

  const url = `http://localhost:8080/api/post/v1.1/${id}`

  const { req } = context
  const myCookieValue = req.cookies.myCookie

  const myHeaders = {
    Cookie: myCookieValue,
  }

  try {
    const response = await axios.get(url, { headers: myHeaders })
    const data = response.data;

    return {
      props: {
        data,
      },
    }
  } catch (error) {
    console.log('error', error);

    return {
      props: {
        data: null,
      },
    }
  }
}

export default Post