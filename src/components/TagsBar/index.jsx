import { useEffect, useState } from "react";
import { StyledTagsBar } from "./styles";
import axios from "axios";

const TagsBar = ({className}) => {
  const [tags, setTags] = useState()

  useEffect(() => {
    const callTags = async () => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
    
      try {
        const response = await axios.get(
          'http://localhost:8080/api/tag/v1.1/paginated-desc/1/10',
          requestOptions
        );

        setTags(response.data)
      } catch (error) {
        console.log('error', error);
      }
    }

    callTags()
  }, [])

  return (
    <StyledTagsBar className={className}>
      <p>Principais tags:</p>
      <div class="buttoncontainer">
        {tags?.tagDtos?.map((tag) => {
          return <a href={"/post-by-tag?page=1&tag=" + tag.nome} class="btn-tag">{tag.nome}</a>;
        })}
        <a href="/tags" class="btn-tag">...</a>
      </div>
    </StyledTagsBar>
  );
};

export default TagsBar;
