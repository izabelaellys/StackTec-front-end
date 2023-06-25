import Button from "../Button";
import { StyledPostList } from "./styles";

import { useRouter } from "next/router";

const PostList = ({ data }) => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <StyledPostList>
      {data?.postDtos?.map((post) => {
        return (
          <div className="questioncard">
            <div>
              <p>{post?.votos} votos</p>
              <p className={post?.respostas > 0 ? 'resposta active' : 'resposta'}>{post?.respostas} resposta</p>
            </div>
            <div className="questioncontent">
              <div className="buttoncontainer">
                {post?.tags?.map((tag) => {
                  return (
                    <a href={"/post-by-tag?tag=" + tag} className="btn-tag">
                      {tag}
                    </a>
                  );
                })}
              </div>
              <a href={"/post/" + post.id}>{post?.titulo}</a>
            </div>
          </div>
        );
      })}
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
