import { useEffect, useState } from "react";
import { StyledTagsList, TagCard } from "./styles";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../Button";

const TagsList = () => {
  const itemsByPage = 2
  const router = useRouter()
  const { page } = router.query
  const [tags, setTags] = useState()
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/tag/v1.1/paginated-desc/${
            page || 1
          }/${itemsByPage}`
        )
        setTags(response?.data?.tagDtos)
        setTotalPages(response?.data?.totalPages)
      } catch (error) {
        console.log("error", error)
      }
    };

    fetchData()
  }, [])

  return (
    <StyledTagsList>
      <div class="taghead">
        <p>Nome da TAG</p>
        <p>Visualizar filtro</p>
      </div>

      <div class="tagcontent">
        {tags?.map((item) => {
          return (
            <TagCard>
              <p>{item.nome}</p>
              <div class="viewcontainer">
                <img src="view.png" alt="" />
              </div>
            </TagCard>
          )
        })}
      </div>

      <div class="paginationcontainer">
        {page && page < totalPages && <Button link={`tags?page=${parseInt(page) + 1}`} title="Ver mais" />}
        {!page && <Button link={`tags?page=2`} title="Ver mais" />}
      </div>
    </StyledTagsList>
  );
};

export default TagsList;
