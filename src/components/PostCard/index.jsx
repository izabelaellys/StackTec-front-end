import { StyledPostCard } from "./styles";

const PostCard = ({ posts }) => {
  return (
    <StyledPostCard>
      {posts?.map((post) => {
        return (
          <div className="questioncard">
            <div>
              <p>{post?.votos} votos</p>
              <p
                className={post?.respostas > 0 ? "resposta active" : "resposta"}
              >
                {post?.respostas} resposta
              </p>
            </div>
            <div className="questioncontent">
              <div className="buttoncontainer">
                {post?.tags?.map((tag) => {
                  return (
                    <a
                      href={"/post-by-tag?page=1&tag=" + tag}
                      className="btn-tag"
                    >
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
    </StyledPostCard>
  );
};

export default PostCard;
