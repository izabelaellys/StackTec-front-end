import axios from "axios";

function postByTag({result}) {
  console.log(result)
  return <></>;
}

export default postByTag;

// export async function getServerSideProps(context) {
//   const { req, query } = context;
//   const myCookieValue = req.cookies.myCookie;
//   const { tag, page, itemsByPage } = query;

//   const url =
//     "http://localhost:8080/api/post/v1.1/getPageableByTags/" +
//     page +
//     "/" +
//     itemsByPage +
//     "/"

//   const data = {
//     ordens: ['recentes'],
//     tags: ['poo', 'java'],
//   };

//   const myHeaders = {
//     accept: "application/json",
//     "Content-Type": "application/json",
//     Cookie: myCookieValue,
//   };

//   try {
//     const response = await axios.post(url, data, {
//       headers: myHeaders,
//     });
//     const result = response.data;

//     return {
//       props: {
//         result,
//       },
//     };
//   } catch (error) {
//     console.log("Error:", error);

//     return {
//       props: {
//         result: null,
//       },
//     };
//   }
// }
