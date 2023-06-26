import PostByTags from "@/components/PostByTags";
import Head from "next/head";

function postByTag() {
  return(
    <>
      <Head>
        <title>StackTec - Pesquisa Post por Tag</title>
      </Head>
      <PostByTags />
    </>
  );
}

export default postByTag;
