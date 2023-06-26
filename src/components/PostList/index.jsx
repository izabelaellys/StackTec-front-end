import Button from "../Button";
import PostCard from "../PostCard";
import { StyledPostList } from "./styles";

import { useRouter } from "next/router";

const PostList = ({ data }) => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <StyledPostList>
      <PostCard posts={data?.postDtos} />
      <Button
        title="Ver Mais"
        link={
          page < data?.totalPages
            ? "/?page=" + (parseInt(page) + 1)
            : "/?page=" + page
        }
        deactive={page == data?.totalPages ? true : false}
      />
    </StyledPostList>
  );
};

export default PostList;
